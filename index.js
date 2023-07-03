#!/usr/bin/env node

const shell = require('shelljs')
const yargs = require('yargs')

function main () {
  return yargs.scriptName('metapmorphe')
    .usage('$0 <cmd> [args]')
    .command(
      'transform <template>',
      'Transform repo with defined template',
      (yargs) => {
        yargs.positional('template', {
          describe: 'template to use',
          type: 'string'
        })
        yargs.option('folder', {
          alias: 'f',
          describe: 'folder where template is located',
          type: 'string',
          default: 'templates'
        })
      },
      (argv) => {
        console.log('transforming with template', argv.template)

        const FOLDER = argv.folder + '/' + argv.template

        function migrate (folder, filePath) {
        // remove folder from path
          const newPath = filePath.toString().replace(folder + '/', '')

          console.log('migrating', folder + '/' + filePath, 'to', newPath)
          shell.cp(folder + '/' + filePath, newPath)
        }

        shell.ls('-AR', FOLDER).forEach(function (file) {
        // ignore folders
          if (file.indexOf('.') === -1 || file.indexOf('netlify.toml') > -1) {
            return
          }

          migrate(FOLDER, file)
        })
      }
    )
    .command(
      'save <template>',
      'Save current repo as template',
      (yargs) => {
        yargs.positional('template', {
          describe: 'template to use',
          type: 'string'
        })
        yargs.option('folder', {
          alias: 'f',
          describe: 'folder where template is located',
          type: 'string',
          default: 'templates'
        })
      },
      function (argv) {
        console.log('save to ' + argv.template)

        const files = shell.exec('git ls-files --modified', { silent: true }).stdout.split('\n')
        files.pop()

        files.forEach(function (filePath) {
          const dirname = filePath.split('/').slice(0, -1).join('/')
          const newPath = argv.folder + '/' + argv.template + '/' + filePath

          shell.mkdir('-p', argv.folder + '/' + argv.template + '/' + dirname)
          shell.cp(filePath, newPath)
          shell.exec('git checkout ' + filePath, { silent: true })
        })
        console.log('saved', files.length, 'files')
      }
    )
    .version(require('./package.json').version)
    .help()
    .showHelpOnFail(true)
    .demandCommand(1, '')
    .epilog('Made with ❤️ by BilelJegham').argv
}

main()
