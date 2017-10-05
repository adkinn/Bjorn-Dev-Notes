# Developing on the Microsoft Developer site

Go [here](https://github.com/MicrosoftDocs/devmsft) and clone the repo. Read the Read Me, which has all the info on how to get browswersync going.

I've just copied and pasted the readme Jeremy created below: 

# devmsft

The [developer.microsoft.com]() home page.

To develop:

1. Check whether you have browser-sync installed:
    ```
    browser-sync --version
    ```

    If you need to install browser-sync, execute:
    ```
    npm install --global browser-sync
    ```

2. To start a webserver, file watcher and open the index.html page, execute:
    ```
    browser-sync start --server --serveStatic dev --port 4000 --no-ui
    ```

## docs.microsoft.com reuse

The index.html page loads a script from docs.microsoft.com containing the UHF loader, cookie consent and JSLL implementation. This script can be rebuilt by opening the Template.Docs project and executing the following commands:

```
npm run build
npm run rollup-developer-microsoft-com
npm run drop
```

Once you've done that, commit the resulting files and open a PR to the develop branch of Template.Docs to stage the changes for release.