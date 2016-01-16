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
var output = postcss([autoprefixer])
  .use(atImport())
  .use(cssvariables())
  .use(conditionals())
  .use(customMedia())
  .process(css, {
    from: "./src/mnml.css",
    to: "./css/mnml.css"
  })
  .css

fs.writeFile("css/mnml.css", output, 'utf-8')

// Using Sqwish for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: './css/mnml.css',
    fileOut: './css/mnml.min.css'
});
