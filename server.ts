import express from "express";
import webpack, { Configuration } from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "./webpack.config";

const app = express();
const compiler = webpack(config as Configuration);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    path: `/__webpack_hmr`,
    heartbeat: 10 * 1000,
  })
);

// Serve the files on port 3000.
app.listen(3000, () => console.log("Example app listening on port 3000!\n"));
