// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { webpackOverride } from "./src/video/webpack-override.mjs";

Config.setVideoImageFormat("jpeg");
Config.setEntryPoint("./src/video/index.ts");
Config.setChromiumOpenGlRenderer("angle");
Config.setJpegQuality(100);

Config.setScale(2);
Config.overrideWebpackConfig(webpackOverride);
