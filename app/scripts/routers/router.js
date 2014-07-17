define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'home',
      about: 'about',
      'detail/:id':  'movieDetail'
    }
  });

  return Router;
});
