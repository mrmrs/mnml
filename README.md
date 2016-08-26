# MNML

## What is this?

View the project page at [http://mn-ml.cc](http://mn-ml.cc "MNML - A light-weight responsive html5 boilerplate.")

MNML is a highly unopinionated starting point for prototyping responsive HTML5 projects with PostCSS.
Uses browser-sync to create a livereloading server for rapidly prototyping sites.

## Features

* Css compiling with postcss
* Css minification
* Autoprefixer (automatically adds appropriate vendor prefixes)
* Browser reload on filesave using browser-sync
* Local server for serving a static site
* Uses normalize.css

## Getting started

### Instructions

* Clone the repo from GitHub and make it your own.
* In terminal run each line as a separate command

```https
    git clone https://github.com/mrmrs/mnml.git yourNewRepoName
```

```ssh
    git clone git@github.com:mrmrs/mnml.git yourNewRepoName
```

Then

```bash
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

- @xiaogwu
- @cbracco
- @franciscogo
- @nolastan
- @markphd
- @amirahaile
- @roylodder
- @shakyShane
- @andrew
- @filipelinhares
- @mattcdowning
- @cwonrails
- @mrzool

# License

The MIT License (MIT)

Copyright (c) 2016 @mrmrs

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

