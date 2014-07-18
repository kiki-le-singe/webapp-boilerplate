define([
  'backbone',
  'models/sitemap'
],

function (Backbone, Sitemap) {
  'use strict';

  return Backbone.Collection.extend({
    model: Sitemap,
    url: '/server/stubs/sitemap.json'
  });
});
