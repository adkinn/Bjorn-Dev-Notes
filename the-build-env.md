# The build environment

## Templates

This is the `Template.Docs` repository, of which `develop` is the development branch, and `master` is sort of the live branch. Once something is pushed up to master a CI job (Jenkins) will eventually push that changed up to github, to the `template.docs.msft` branch, where it can be served to the live site. This `template.docs.msft` has the same branches as the master branch on template.docs. So, one could add a possible feature branch and have it uploaded to the template.docs.msft repository by pushing it to `master` on Template.Docs (and somehelp from a CI job?).

### Content Build
Content is build with JINT and Nustache right now.

### Dynamic Rendering
If you change a css file you'll have to do a chache bust in `docs.mainframe.js`. Just increment or decrement the number within.

In summary:
- CSS (won't trigger rebuild)
- JS (triggers rebuild, contains cache bust)
- TS (automatic cache bust)
- Liquid (automatic cache bust)

## Content

This is sort of DevSandbox, which is for development. However, the actual live site is an entirely different repository. To further complicate matters the branch names don't correspond to those in the Templates repository. In DevSandbox `master` is the staging branch which goes to review.docs, while, `live` is the production branch.

### The actual live repository
Is called DocsRoot, which can be found here: `https://github.com/MicrosoftDocs/DocsRoot`. Media files for this can be place / found in here `https://github.com/MicrosoftDocs/DocsMedia`, yet another content repo for resources.