### Install OPST and the project dependencies
- Installation using 'npm installk' yields the following warning: 
```
npm WARN deprecated bower@1.8.0: ..psst! While Bower is maintained, we recommend Yarn and Webpack for *new* front-end projects! Yarn's advantage is security and reliability, and Webpack's is support for both CommonJS and AMD projects. Currently there's no migration path, but please help to create it: https://github.com/bower/bower/issues/2467
```



### Before NPM install: Command for Powershell Permissions
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

### Problem within the Sass file
`C:\Users\wibjorn\Code\repos\apex\Template.Docs\node_modules\node-sass` has no `\Vendor` folder, which for some reason is required. Can I just `mkdir Vendor` in this folder? Probably not.

### Run: `npm bugs template-docs`
```
I've gotten this error: npm ERR! Windows_NT 10.0.14393
npm ERR! argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "bugs" "template-docs"
npm ERR! node v6.11.2
npm ERR! npm  v3.10.10
npm ERR! code ENOENT
npm ERR! errno ENOENT
npm ERR! syscall getaddrinfo

npm ERR! enoent getaddrinfo ENOENT mseng.pkgs.visualstudio.com:443
npm ERR! enoent getaddrinfo ENOENT mseng.pkgs.visualstudio.com:443
npm ERR! enoent This is most likely not a problem with npm itself
npm ERR! enoent and is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! Please include the following file with any support request:
npm ERR!     C:\Users\wibjorn\Code\repos\apex\Template.Docs\npm-debug.log
```


Specifically: 

```
npm ERR! Tell the author that this fails on your system:
npm ERR!     node-sass global/stylesheets --output src/themes/css --output-style expanded
```


Inside `node_modules` there's a `vendor` folder. This could be part of the problem?


### Deleting Node_Modules folder
If you suspect some dependencies were not properly installed you may want to quickly re `npm install` your `node_modules` folder
This can be slow in the bash command prompt, but can be done more quickly my CDing in to the project directory and running `rmdir /s /q node_modules`

- Also when installing git, select the install for WIndows Shell Command option.


There's currently a bug related to the `\DevStandbox`, which currently has to be on the preview branch in order for the commands on the `\Template.Docs` to build properly.




```css
// barlink classes

.barLink {
  align-items: center;
  border-left: solid 6px $border;
  display: flex;
  font-size: 1.125rem;
  line-height: 28px;
  margin-top: 4px;
  min-height: 36px;
  padding-left: $card-padding;
  padding-right: $card-padding;
}

html.theme_night .mainContainer[dir="rtl"] .barLink:hover {
  border-left-color: $night-blue;
}

.barLink:hover {
  border-left-color: $blue;
}

html.theme_night .barLink:hover {
  border-left-color: $night-blue;
}

.barLink img {
  width: 36px;
  height: 36px;
  margin: 5px 10px 5px 0;
}

.mainContainer[dir="rtl"] .barLink {
	border-right: solid 6px $border;
	border-left: none;
}

.mainContainer[dir="rtl"] .barLink:hover {
  	border-right-color: $blue;
}

.mainContainer[dir="rtl"] .barLink img {
  width: 36px;
  height: 36px;
  margin: 5px 0 5px 10px;
}

```