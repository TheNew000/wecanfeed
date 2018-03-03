'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _donationConsumer = require('./domain-model/donation-consumer');

var _donationConsumer2 = _interopRequireDefault(_donationConsumer);

var _donationProvider = require('./domain-model/donation-provider');

var _donationProvider2 = _interopRequireDefault(_donationProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = new _koa2.default();
var router = new _koaRouter2.default();

_mongoose2.default.connect(_config2.default.database.url, { useMongoClient: true });
_mongoose2.default.Promise = _bluebird2.default;

router.get('/api/donation-consumers', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var consumers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _donationConsumer2.default.Model.find();

          case 2:
            consumers = _context.sent;

            ctx.body = consumers;

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/api/donation-consumers/:_id', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
    var consumer;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _donationConsumer2.default.Model.findOne({ _id: ctx.params._id });

          case 2:
            consumer = _context2.sent;

            ctx.body = consumer;

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

router.get('/api/donation-providers', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
    var providers;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _donationProvider2.default.Model.find();

          case 2:
            providers = _context3.sent;

            ctx.body = providers;

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());

router.get('/api/donation-providers/:_id', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx) {
    var provider;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _donationProvider2.default.Model.findOne({ _id: ctx.params._id });

          case 2:
            provider = _context4.sent;

            ctx.body = provider;

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');