# MNML

View the project page at [http://mn-ml.cc](http://mn-ml.cc "MNML - A light-weight responsive html5 boilerplate.")

MNML is a starting point for responsive HTML5 SASS projects.
Focused on mobile readability.

# Getting started

* Create a new repo for your project on Github
* In terminal run
```bash
    git clone git@github.com:mrmrs/mnml.git [yourNewRepoName]
    cd [yourNewRepoName]
    git remote rm origin
    git remote add origin git@github.com:[yourUserName]/[yourNewRepoName].git
    git remote -v
```

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
```bash
    origin git@github.com:[yourUserName]/[yourNewRepoName].git (fetch)
    origin  git@github.com:[yourUserName]/[yourNewRepoName].git (push)
```

* Once you add & commit files you are ready to publish run:
```bash
git push -u origin master
```

# What is it?

Mostly a bare-bones html5 template with some basic css I start most projects
with.

## Directory structure
```
    mnml/
        ├── README.md
        ├── css
        │   └── i.css                 (2 kb minified - 1.2kb gzipped)
        ├── index.html                (386 bytes)
        └── sass                      CSS source
            ├── _normalize.scss
            ├── _grid.scss
            ├── _type.scss
            ├── _styles.scss
            └── i.scss
```

## Rake tasks

Start sass development - watches the sass folder and updates css/i.css with every file change
```bash
rake sass
```

Start sass - output is minified to css/i.css
```bash
rake minify
```

# Author

[MRMRS](http://mrmrs.cc "Adam Morse - Designer Developer")

# License

The MIT License (MIT)

Copyright (c) 2013 @mrmrs

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

