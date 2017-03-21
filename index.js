/* jshint node: true, -W030 */
'use strict';

var path = require('path');
var stew = require('broccoli-stew');

module.exports = {
  name: 'ember-simple-auth-envoy',

  init: function() {
  	this._super.init && this._super.init.apply(this, arguments);

    var bowerDeps = this.project.bowerDependencies();

    if (bowerDeps['envoy-authentication']) {this.ui.writeWarnLine('Please remove `envoy-authentication` from `bower.json`. For ember-simple-auth-envoy only the NPM package is needed.');}
  },

  treeForVendor: function() {
    return stew.find(path.join(path.dirname(require.resolve('envoy-authentication')), '..', 'dist'), {
      destDir: 'pouchdb',
      files: ['envoy.authentication.js']
    });
  },

  included(app) {
    app.import('vendor/pouchdb/envoy.authentication.js');
  }
};
