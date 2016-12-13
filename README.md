# express-vue-boilerplate
A boilerplate for running a vue framework with Webpack workflow in Node express. This boilerplate can be used in the production environment.And the server side architecture is following the MVC best practice. More detail can read my article: **ExpressJs的最佳实践的思考**

![Express-Vue](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/nodejs/express.png)

## Install and Running
`git clone https://github.com/linxiaowu66/express-vue-boilerplate`

or just export the files:

`svn export https://github.com/linxiaowu66/express-vue-boilerplate trunk ./dir`

1. cd express-vue-boilerplate
2. npm install
3. npm run dev
4. navigate to http://localhost:9090 in your browser of choice.

**If you want to modify the port, just update the config.dev.json or config.prod.json depend on your enviroment**


## Overview

### Vue by default
The project runs with Vue by default and hot replacement of changes to the modules. Currently it is on 2.1.0

### Muse-UI: Component Library
We use the Muse-UI: a component library with vue and use the meterial design style. So excellent library, thanks to [@myronliu347](https://github.com/myronliu347) and his [repo](https://github.com/museui/muse-ui)

### Express with MVC
The backend architecture is based on the MVC framework, each folder has his clear dupty, and following some design principles which can find my article-**ExpressJs的最佳实践的思考**

### development vs production enviroment
this boilerplate can be used in the all above enviroment, the `webpack.prod.config.js` is designed for the prod enviroment. So you can be assured to use it.
