define([
  'backbone'
],

function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    idAttribute: 'id',

    initialize: function () {
      console.log('initialize: movie model');
    }
  });
});
