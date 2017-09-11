# TypeScript


## create a new file for a specific page
1. create a new file in the `C:\repos\apex\Template.Docs\global\ts\` folder. For example `home-page.ts`;

2. if you want to add page specific typescript code, (which will be loaded in the `<head></head>` of the document,) then go to `./declarations.d.ts` and find the `./msDocsGlobal` object and within that go to the `data : { pageTemplate: ``}` key value pair. Add your page template name into the list of things, in alphabetical order.

3. Then, in the `index.ts` file, add your page specific .ts file into the list of declarations.

```JavaScript
import `./home-page`;
```

4. Inside your file, you can create an optional if statement that will cause the code to only load when the specific page template is active.

```JavaScript
//imports above
if (msDocs.data.pageTemplate === "Home") {
    //your code here.
}
```

5. You can import other files with the standard es6 import syntax

```javascript
import { msDocs } from "./globals";
import { scrollTo } from "./scroll-to";

//code below
```
