# React Server-Side Rendering Example

This projects uses webpack to bundle the main App.js file inside a React Project. This is created inside assets to be readed as public data by the client (Check webpack.config.js)

Also runs a babel transpilation to allow node read the server.js file, which bassically creates a String with React code rendered to be sended to client.

Finally once main file is build to assets folder, and the views folder is created by babel transpilator. With index.js is configured an minimal node + express server to allow client to get client bundle and the configured pre rendered instance of the react app STRING.


## Setup
```
$ npm install
$ npm run server-render
```

