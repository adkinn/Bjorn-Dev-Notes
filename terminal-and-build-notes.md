# Terminal and Build Notes

## Developing and Development Tasks

### Important PowerShell/terminal commands:
-`npm run develop` from the `Template.Docs` folder. **convenient and dangerous tip** you can delete the content folders to speed up the compile time for the page you're working on, but *don't commit those changes!* You'll have to unstage these deletions in git before commiting files.
-`npm run opst init`

## Git

### Create a pull request
Commit everything as you would do normally, push to origin; then go to mseng site and it should be there along with a link that says "Create new pull request" to develop branch (under all);

## Media

During production, images and other media are usually stored in [the Microsoft Docs DocsMedia repository](https://github.com/MicrosoftDocs/DocsMedia/tree/master/media)

## Styling

### Color and font-color variables 
Find the variables for font and color here: `C:\repos\apex\Template.Docs\global\stylesheets\config\_settings.scss`.

For most shared styles throughout the site, column widths or "Doc Blocks" check `Template.Docs\global\stylesheets\site.scss` stylesheet.

### Break points
Most site break points fall into one of the following catagories. But there's some debate on whether they should all be min-width.

```css
@media (max-width: 480) {}
@media (max-width: 767.99999px) {}
@media (max-width: 1083.99999px) and (min-width: 768px) {}
@media (min-width: 1084px) {}
@media (min-width: 1795px) {}
```

### Themes (Night Theme)
To add functionality that allows us to use the dark / night theme on the site we can do something like the following:
```css
.someThemeItem {
	color: $text;
	html.theme_night & {color: $night-text} // here
}
```

### Global header spacing and alignment
The following breakpoints can be used if the `.mainContainer` styles ever need to be re-written to be full width.

```css
@media (max-width: 767.99999px) {
	.yourContainerClass {
		padding: 0 16px;
	}
}
@media (max-width: 1083.99999px) and (min-width: 768px) {
	.yourContainerClass {
		margin-left: 24px 24px 0;
		width: calc(100% - 24px);
	}
}
@media (min-width: 1084px) {
	.yourContainerClass {
		margin:  24px 5%;
		width: 90%; //or 95?
	}
}
@media (min-width: 1795px) {
	.yourContainerClass {
		max-width: 1600px;
		margin: 24px auto 0;
	}
}
```

### Adding Right to Left specific styling
Since the most applicable instance of `dir="rtl"` is in the `.mainContainer` element, you can usually use Sass to create a conditional style to target behavior. Use the following example as a guide:
```css
.mainContainer[dir='rtl'] & { text-align: right; }
```

## Testing

### Testing from Right to Left

Easiest way to go: open dev tools and add `dir="rtl` in any container where you see `dir="ltr"`. These are usual the `<html>` element, the `class="mainContainer"` element, but there are one or two more.

Second easiest way: go to `Template.Docs\src\themes\_includes\master.html.liquid` and find the following section of code:

```liquid
{%- if contentLocale == 'ar-sa' or contentLocale == 'he-il' -%}
	{%- assign dir = "rtl" -%}
{%- else -%}
	{%- assign dir = "ltr" (CHANGE TO "rtl") -%}
{%- endif -%}
```

Replace the `ltr` with `rtl` and you should "mostly" see the correct thing. However, **be sure not to commit these changes.** After unstaging any changes you've made to `master.html.liquid` you'll likely have to restart the `npm run develop` process for it to build properly in a ltr way.

Thoroughway go to this file `Template.Docs\global\ts\locale.ts` and find and replace all instances of `ltr` with `rtl`, although you might want to be wary of replacing variable names. **Once again, don't commit these changes.**

In the normal markup on the page, you can find `dir="ltr"` or less commonly `dir="rtl"`

The text variables for night can be found in `Template.Docs\global\stylesheets\config\_settings.scss`. 

## Dealing with Errors

### Error with Build
When build fails check `.openpublishing.publish.config.json`.
- This error usually contains `npm ERR! code ENOENT` something something.
- If this is the case, we can check the `.openpublishing.publish.config.json` file in `_themes` folder, needs to be in the `"dependent_repository" : [{HERE}] ` object.
- But when we npm run develop, the `template_folder` (within `docset_to_publish`) needs to have `"Template.Docs"` instead of `"_themes"`.
**How to fix this problem:** just run `npm run opst init` from within the `Template.Docs` repository. 

Examples of `.openpublishing.publish.config.json`:

Suitable for production/live (not development):
```json
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
```json
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

```json
    "dependent_repositories": [
        {
            "path_to_root": "_themes",
            "url": "https://github.com/Microsoft/templates.docs.msft",
            "branch": "develop",
            "branch_mapping": {}
        }
    ]
```