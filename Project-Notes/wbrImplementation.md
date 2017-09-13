# Implementing <wbr>

Find text-formatting.ts here: `Template.Docs\global\ts\text-formatting.ts`.

zero-width space causes problems- double-clicking to select text doesn't work, copy paste issues/hacks.

- change \u200B to <wbr> in breakDots function
- Polyfill for IE11
http://plnkr.co/edit/9v71eusqwKlogzXaoM4T?p=preview    

- Remove hack copy code for \u200B

in the future
----
Need Edge bug fixed before we can break before periods, for now break after periods: 
https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12752184/

Internal bug tracker link:
https://microsoft.visualstudio.com/OS/_workitems?id=12752184


## Required

1. parse the original string, adding WBR elements nctions with replace.
2. parse the next string, ignoring the <wbr> elements contained within.

or

1. modify the regex to include more characters than just A-Z / a-z.
2. parse the original string, adding WBR elements with replace.

## Pages to Test 
TOC
Moniker picker
quick filters


## Important Diretories

C:\repos\apex\DevSandbox\devsandbox\reference\System.Web.HttpTaskAsyncHandler.yml
http://localhost:3000/en-us/devsandbox/reference/System.Web.HttpTaskAsyncHandler.html
- Tentatively not working properly.

C:\repos\apex\DevSandbox\devsandbox\javascript\Operations.yml
http://localhost:3000/en-us/devsandbox/javascript/Operations.html

You'll have to check the yml files where things are render {{two of these curly braces is for text content updates}}, while {{{ three refers to html }}}.

auxillary breakText function is here `C:\repos\apex\Template.Docs\src\ContentTemplate\content.common.js`.

For the general functions associated with a function
`C:\repos\apex\Template.Docs\src\ContentTemplate\partials\universalReference\javaScript\transform.js`

For yml partials
`C:\repos\apex\Template.Docs\src\ContentTemplate\partials\universalReference\javaScript\member.tmpl.partial`

### List of tested pages and files
- [x] API Browser Chrome
- [x] API Browser IE

-[x] Universal Reference
    - transform.js and related template files
        - [x] azurecli
        - [x] javascript
        - [x] python
        - [x] typeScript

- [] manage reference 
    - `C:\repos\apex\Template.Docs\src\ContentTemplate\ManagedReference.html.primary.tmpl`
    - see "General workflow" below here.
- [x] Other occurances of breakText in Content
    - [x] `C:\repos\apex\Template.Docs\src\ContentTemplate\AzurePSModulePage.html.primary.js`
    - [x] `C:\repos\apex\Template.Docs\src\ContentTemplate\AzureCli.html.primary.js` replaced displayName

## General workflow
- Search 'breakText' in the entire 'ContentTemplate' folder.
- Then find the file it's changing.
- See if you can open it.
- Then find its nustash file,
- then find the affected partial,
- then go through and make sure that the value that breakText is modifying / injecting into the templates is there. It's recently been model `displayName` and name `value`.
- change the {{value}} to {{{value}}}. The former injects text content. The latter injects html.

## As a final check, might try a regex
- {{#name}} ... {{value}} ... {{/name}}
- {{ displayName }}