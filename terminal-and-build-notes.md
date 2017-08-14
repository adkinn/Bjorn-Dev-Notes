# Terminal and Build Notes

## Developing



### Important PowerShell/terminal commands:
-`npm run develop` from the `Template.Docs` folder. **convient and dangerous tip** you can delete the content folders to speed up the compile time for the page you're working on, but *don't commit those changes!* You'll have to unstage these deletions in git before commiting files.
-`npm run opst init` 

## Styling

### Color and font-color variables 
Find the variables for font and color here: `C:\repos\apex\Template.Docs\global\stylesheets\config\_settings.scss`.

For most shared styles throughout the site, column widths or "Doc Blocks" check `Template.Docs\global\stylesheets\site.scss` stylesheet.

### Break points
- `@media (max-width: 480) {}`
- `@media (max-width: 767.99999px) {}`
- `@media (max-width: 1083.99999px) and (min-width: 768px) {}`
- `@media (min-width: 1084px) {}`
- `@media (min-width: 1795px) {}`

### Themes (Night Theme)
To add functionality that allows us to use the dark / night theme on the site we can do something like the following:
```
.someThemeItem {
	color: $text;
	html.theme_night & {color: $night-text}
}
```

### Testing from Right to Left
Easy way: go to `Template.Docs\src\themes\_includes\master.html.liquid` and find the following section of code:
```
{%- if contentLocale == 'ar-sa' or contentLocale == 'he-il' -%}
	{%- assign dir = "rtl" -%}
{%- else -%}
	{%- assign dir = "ltr || rtl" -%}
{%- endif -%}
```
Replace the `ltr` with `rtl` and you should "mostly" see the correct thing. However, **be sure not to commit these changes.**

Thoroughway go to this file `Template.Docs\global\ts\locale.ts` and find and replace all instances of `ltr` with `rtl`, although you might want to be wary of replacing variable names. **Once again, don't commit these changes.**

In the normal markup on the page, you can find `dir="ltr"` or less commonly `dir="rtl"`

The text variables for night can be found in `Template.Docs\global\stylesheets\config\_settings.scss`. 

### Global header spacing and alignment
The following breakpoints can be used if the `.mainContainer` styles ever need to be re-written to be full width.

```
@media (max-width: 767.99999px) {
	.yourContainerClass {
		padding: 0 16px;
	}
}
@media (max-width: 1083.99999px) and (min-width: 768px) {
	.yourContainerClass {
		margin-left: 24px;
		width: calc(100% - 24px);
	}
}
@media (min-width: 1084px) {
	.yourContainerClass {
		margin:  0 5%;
		width: 90%; //or 95?
	}
}
@media (min-width: 1795px) {
	.yourContainerClass {
		max-width: 1600;
		margin: auto;
	}
}
```

## Media

During production, images and other media are usually stored in [the Microsoft Docs DocsMedia repository](https://github.com/MicrosoftDocs/DocsMedia/tree/master/media)


## Dealing with Errors

### Error with Build
When build fails check `.openpublishing.publish.config.json`.
- This error usually contains `npm ERR! code ENOENT` something something.
- If this is the case, we can check the `.openpublishing.publish.config.json` file in `_themes` folder, needs to be in the `"dependent_repository" : [{HERE}] ` object.
- But when we npm run develop, the `template_folder` (within `docset_to_publish`) needs to have `"Template.Docs"` instead of `"_themes"`.
**How to fix this problem:** just run `npm run opst init` from within the `Template.Docs` repository. 

Examples of `.openpublishing.publish.config.json`:

Suitable for production/live (not development):
```
	"docsets_to_publish": [
		{
			"docset_name": "devsandbox",
			"build_source_folder": "devsandbox",
			"build_output_subfolder": "devsandbox",
			"locale": "en-us",
			"version": 0,
			"open_to_public_contributors": false,
			"type_mapping": {
				"Conceptual": "Content",
				"ManagedReference": "Content",
				"RestApi": "Content",
				"LandingData": "Content",
				"APIConnector": "Content",
				"Tutorial": "Content",
				"UniversalReference": "Content"
			},
			"template_folder": "_themes",
			"customized_template_paths": [
				"_dependentPackages/uref/content"
			]
		}
	],
```

Suitable for development (after running `npm run opst init`):
```
	"docsets_to_publish": [
		{
			"docset_name": "devsandbox",
			"build_source_folder": "devsandbox",
			"build_output_subfolder": "devsandbox",
			"locale": "en-us",
			"version": 0,
			"open_to_public_contributors": false,
			"type_mapping": {
				"Conceptual": "Content",
				"ManagedReference": "Content",
				"RestApi": "Content",
				"LandingData": "Content",
				"APIConnector": "Content",
				"Tutorial": "Content",
				"UniversalReference": "Content"
			},
			"template_folder": "Template.Docs",
			"customized_template_paths": [
				"_dependentPackages/uref/content"
			]
		}
	],
```

This repo is where published / prod templates are stored:
```
    "dependent_repositories": [
        {
            "path_to_root": "_themes",
            "url": "https://github.com/Microsoft/templates.docs.msft",
            "branch": "develop",
            "branch_mapping": {}
        }
    ]
```


