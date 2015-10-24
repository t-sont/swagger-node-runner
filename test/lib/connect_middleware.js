'use strict';

var should = require('should');
var request = require('supertest');
var path = require('path');
var _ = require('lodash');

var SwaggerRunner = require('../..');

var TEST_PROJECT_ROOT = path.resolve(__dirname, '..', 'assets', 'project');
var TEST_PROJECT_CONFIG = { appRoot: TEST_PROJECT_ROOT };

describe('connect_middleware', function() {

  before(function(done) {
    this.app = require('connect')();
    var self = this;
    SwaggerRunner.create(TEST_PROJECT_CONFIG, function(err, r) {
      if (err) { return done(err); }
      self.runner = r;
      var middleware = self.runner.connectMiddleware();
      middleware.register(self.app);
      done();
    });
  });

  require('./common')();

});
