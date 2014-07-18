define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'home',
      sitemap: 'sitemap',
      'detail/:id':  'movieDetail'
    }
  });

  return Router;
});
