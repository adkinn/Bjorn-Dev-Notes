# Templating and Localization
The majority of the actual localization is done by the loc team. However, there are some things the developer needs to do to initialize the within markdown / JavaScript.

### Markdown localization
Right now (9/21) the majority of localization happens in `Template.Docs\global\strings.yml`. This file is used to localize all sorts of values on all sorts of pages.

`strings.yml`  is accessed in a templates `name.html.primary.js` via the `model.__global.insertUIDHere`. For example the `Tutorial.html.primary.js` file deals with the transforms for one template partial called `Tutorial.html.primary.tmpl`.


In `strings.yml` itself you can add key value pairs like this:
```yml
- uid: token.variableName 
  name: This is the default version of the localized string.
```
 So if in `name.html.primary.js` you say `model.variableName = model.__global.variableName` this will grab the localized value from `string.yml` and associate it with the model.variableName property. `model` is the global object in the associated template, which in this case (as I said before) could be `Tutorial.html.primary.tmpl`. Then in your `.tmpl` file, you'll use the `variableName` value property to put it into the template. Short example below:

 ```liquid
 {{#if variableName}}<h1>{{variableName}}</h1>
 ```

 Importantly/not importantly, you might need to prefix `.yml` the uid with `token.variableName` as in the example above. This will make it available in the ContentTemplate folder, and will go into token.json during build. Apparently the `token.` thing is going away before too long, but it hasn't yet, so one needs to be aware of this. It's actually a second system of localization.


### JavaScript localization