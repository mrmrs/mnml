// dependencies for mnml

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")

// css to be processed
var css = fs.readFileSync("src/mnml.css", "utf8")

// process css
output = postcss()
  .use(atImport())
  .use(cssvariables())
  .use(conditionals())
  .use(customMedia())
  .use(autoprefixer())
  .process(css, {
    from: "./src/mnml.css",
    to: "./css/mnml.css"
  }).then(function(output) {
    fs.writeFile("css/mnml.css", output, 'utf-8')
  });


// Using Clean-css for CSS
new compressor.minify({
    type: 'clean-css',
    fileIn: './css/mnml.css',
    fileOut: './css/mnml.min.css'
});
