define([
  'backbone',
  'models/movie'
],

function (Backbone, Movie) {
  'use strict';

  return Backbone.Collection.extend({
    model: Movie,
    url: '/server/stubs/movies.json',

    initialize: function () {
      console.log('initialize: movies Collection');
    }
  });
});
