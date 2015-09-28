# MNML

## What is this?

View the project page at [http://mn-ml.cc](http://mn-ml.cc "MNML - A light-weight responsive html5 boilerplate.")

MNML is a starting point for prototyping responsive HTML5 PostCSS projects.
Uses gulp to create a dev environment for rapidly prototyping sites.

## Features

* css compiling with postcss
* css minification
* autoprefixer (automatically adds appropriate vendor prefixes)
* browser reload on filesave using browser-sync
* local server for serving a static site

## Getting started

### Instructions

* Create a new repo for your project on Github
* In terminal run each line as a separate command
```bash
    git clone git@github.com:mrmrs/mnml.git yourNewRepoName
    cd yourNewRepoName
    rm -rf .git
    git init
    git remote add origin git@github.com:yourUserName/yourNewRepoName.git
```

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
```bash
    origin git@github.com:yourUserName/yourNewRepoName.git (fetch)
    origin git@github.com:yourUserName/yourNewRepoName.git (push)
```

## Dev environment
To set up a convenient dev environment run this at the root of mnml

```bash
npm install && npm start
```


## Directory structure
```
mnml/
  ├── README.md
  ├── css
  │   ├── mnml.css
  │   └── mnml.min.css
  ├── index.html
  ├── index.js
  ├── package.json
  └── src
      ├── _base.css
      ├── _debug.css
      ├── _grid.css
      ├── _media-queries.css
      ├── _styles.css
      ├── _typography.css
      ├── _variables.css
      ├── lib
      │   └── _normalize.css
      └── mnml.css

```

# Author

[MRMRS](http://mrmrs.io "Adam Morse - Designer Developer")

# Contributors

- Xiao (Sean) Wu
- Chris Bracco
- Andrés Olivares
- Amira Hailemariam

# License

The MIT License (MIT)

Copyright (c) 2015 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

