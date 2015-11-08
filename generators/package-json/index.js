'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {},

  prompting: function() {
    var done = this.async();
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Package name:',
      default: this.appname.replace(/\s+/g, '-')
    }, {
      type: 'input',
      name: 'version',
      message: 'Package version:',
      default: '1.0.0'
    }, {
      type: 'input',
      name: 'description',
      message: 'Package description:',
      default: ''
    }, {
      type: 'input',
      name: 'keywords',
      message: 'Package keywords(split with comma):',
      default: ''
    }, {
      type: 'input',
      name: 'main',
      message: 'Package main entry:',
      default: 'index.js'
    }, {
      type: 'confirm',
      name: 'private',
      message: 'Package is private?',
      default: false
    }, {
      type: 'input',
      name: 'license',
      message: 'Package license:',
      default: 'MIT'
    }, {
      type: 'input',
      name: 'author_name',
      message: 'Package author:',
      default: this.user.git.name()
    }, {
      type: 'input',
      name: 'author_email',
      message: 'Package author\'s email:',
      default: this.user.git.email()
    }, {
      type: 'input',
      name: 'author_url',
      message: 'Package author\'s homepage url:',
      default: 'https://github.com/' + this.user.git.name()
    }];

    this.prompt(prompts, function(answers) {
      answers.author = {
        name: answers.author_name,
        email: answers.author_email,
        url: answers.author_url
      };
      answers.keywords = answers.keywords.trim();
      answers.keywords = answers.keywords ? answers.keywords.split(/[,，]/) : [];
      answers.homepage = answers.homepage || '',
      answers.repository = answers.repository || '',
      this.props = answers;
      done();
    }.bind(this));
  },

  configuring: function() {},

  default: {},

  writing: function () {
    this.template('_package.json', 'package.json', this.props);
  },

  conflicts: function() {},

  install: function() {},

  end: function() {}

});
