define([
  'backbone',
  'marionette',
  'collections/movies',
  'templates',
],

function (Backbone, Marionette, Movies, templates) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: templates.moviedetail,

    initialize: function() {
      console.log('this --- ', this);
      console.log('this.model --- ', this.model);
      console.log('this.model.toJSON --- ', this.model.toJSON());
    }
  });
});
