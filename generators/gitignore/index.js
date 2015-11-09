'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {},

  prompting: function() {
    var done = this.async();
    var prompts = [];

    this.prompt(prompts, function(answers) {
      this.props = answers;
      done();
    }.bind(this));
  },

  configuring: function() {},

  default: {},

  writing: function () {
    this.template('_gitignore', '.gitignore', this.props);
  },

  conflicts: function() {},

  install: function() {},

  end: function() {}

});
