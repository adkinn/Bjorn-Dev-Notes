# Implementing <wbr>

## From the spec
Find text-formatting.ts here: `Template.Docs\global\ts\text-formatting.ts`. Zero-width space causes problems- double-clicking to select text doesn't work, copy paste issues/hacks.

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
    - [x] `C:\repos\apex\Template.Docs\src\ContentTemplate\ManagedReference.html.primary.tmpl`
    - [x] see "General workflow" below here.
- [x] Other occurances of breakText in Content
    - [x] `C:\repos\apex\Template.Docs\src\ContentTemplate\AzurePSModulePage.html.primary.js`
    - [x] `C:\repos\apex\Template.Docs\src\ContentTemplate\AzureCli.html.primary.js` replaced displayName

## General workflow for testing pages and templates
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


## Implement classname replace --
- will need to be on the parent element, cannot be on the dynamically rendered a tag, then must be on the outer parent of the items you're actually looking to apply it to. 
- cannot simply use inner html, because you don't know what attributes will look like.
- must find children, must find their text content, must replace that.

## `word-break`
This css property, must be set to `normal` in order for the implementation of the function to work properly. In many places, it is/was set to `break-all`, which causes it to break on every character, and thus gum up the works. In places where I know the break-text function is being used, I should remove the `break-text: break-all` declaration and **eventually do a cleanup PR to add classes where they need to be**

## Further considerations for the break text function
- it's being called on both the parent of a mostly textNode, we'll have to watch for href with .H or CamelCase

# To do
1. FInd out why the test isn't working correctly.
1. Test pages to make sure the replace works.
    - while doing this, see if you can find a list of class / containers / selectors where you know WBR is being use.
1. Test pages to make sure the currently polyfill works (use created list above).
1. Decide on program flow of the class replace function to class. Efficiency might be important. Find suitable containers to test on.
1. Make a test page for you class replace function.


# specName is a place where perhaps it would be wise to include a breakText replace.

## Pages to check
- [x] http://localhost:3000/en-us/devsandbox/reference/System.Web.HttpTaskAsyncHandler.html - IE and Chrome
- [x] http://localhost:3000/en-us/devsandbox/javascript/Operations.html - Chrome, IE
- [x] http://localhost:3000/en-us/devsandbox/apiBrowser/dotnet.html?view=netframework-4.7 - Chrome, IE
- [x] http://localhost:3000/en-us/devsandbox/typescript/sp-http/httpclient.html - Chrome