# fullstack


This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.3.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`  
```
#ruby被墙，需要更新源到国内
gem sources --remove https://rubygems.org/
gem sources -a https://ruby.taobao.org/
gem sources -l
```
- [sass](http://sass-lang.com/install) (`gem install sass`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.
## production
Run `pm2 restart server/index.js`

```
#grunt serve or grunt build need 3 parameters
1. 公司名  tigerwit/pkds
2. 环境    dev/pro (开发环境和生产环境)
3. 服务器  demo/www (测试服务器和线上服务器)

ex: grunt serve:tigerwit:dev:demo or grunt build:pkds:pro:www
```
