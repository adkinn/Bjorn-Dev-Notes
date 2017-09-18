# Web Server Alternatives

If for some reason you cannot access the configured IP address that shows after running `npm run develop`, you can do the following. The point being to preview things on your phone.

1. Make sure you computer is on the same network as your phone. (MS Guest could be an option)
1. Make sure LAN isn't connected.
1. Before building go to cmd prompt and run `ipconfig`, find your IPv4 address, which is the MS AutoVPN IP address copy that.
1. Go to `Template.Docs\node_modules\opst\lib\tasks\dev-server.js` and comment our line 174 (which reads `middlewares.push(proxy);`).
1. Run `npm run develop` as normal. Wait.
1. Use the IPv4 address on your phone + port name to access the page.