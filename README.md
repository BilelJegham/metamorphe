Metamorphe 🧙‍♂️
===
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/metamorphe?color=blue&label=version" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

<small>Don't forget to give a ⭐️ if this project helped you!</small>


Transform project using templates using a simple CLI and git.
Useful for front project which changes their appearance.




## Install
```
# NPX 
npx metamorphe
# or install globally
npm -g metamorphe
```
## Usage 

```sh
metamorphe <cmd> [args]

Commands :
  metamorphe transform <template>  Transform repo with defined template
  metamorphe save <template>       Save current repo as template

Options :
  --version  
  --help    

Made with ❤️ by BilelJegham
```

 1. Define folder `templates` were template are located
 2. Change your files project and save in template 
   `metamorphe save {templateName}`
 3. If you want to which to your template use `metamorphe transform {templateName}`
 
Example :
```
src/
  assets/
    styles.scss
  App.vue
templates/
  templateA/
    src/
      assets/
        styles.scss
```

## Development

```sh
# Install & link dev s
npm install 
npm link .

# Build & launch
metapmorphe

# uninstall (unlink)
npm unlink .
```

## Author

👤 **BilelJegham**

* Twitter: [@BilelJegham](https://twitter.com/BilelJegham)
* Github: [@BilelJegham](https://github.com/BilelJegham)



