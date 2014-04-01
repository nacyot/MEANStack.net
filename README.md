MEANService
===========

MEAN Stack Community Service - What does it MEAN?

## Pre-Installation
  - [Node.js](http://nodejs.org/)
  - [Git](http://git-scm.com/downloads)
  - [Yeoman](http://yeoman.io/)

## Installation

```
$ git clone git@github.com:MEAN-STACK/MEANStack.net.git
$ cd MEANStack.net
$ npm install .
$ bower install
```

## Execution

During development, use the command below.

```
$ grunt serve         # nodemon (NODE_ENV=development)
```

- Supports livereload for frontend development
- Uses nodemon for backend development

When you want to check distribution version of the frontend application, use this.

```
$ grunt serve:dist    # build and nodemon (NODE_ENV=production)
```

## Test

```
$ grunt test          # test backend and frontend
$ grunt test:back     # test backend
$ grunt test:front    # test frontend
```

## Build

This is only for the frontend application.

```
$ grunt build   # create the 'dist' folder
```


## API

You want to see the API of MEANStack.net

```
$ api.sh
```

call http://localhost:8000/
