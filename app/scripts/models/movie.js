define([
  'backbone',
  'moment'
],

function (Backbone, moment) {
  'use strict';

  return Backbone.Model.extend({
    idAttribute: 'id',

    parse: function(response) {
      response.date = moment.unix(response.date).format('LL');
      return response;
    }
  });
});
