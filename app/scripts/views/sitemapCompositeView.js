define([
  'marionette',
  'views/sitemapItemView',
  'templates'
],

function (Marionette, SitemapItemView, templates) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: templates.sitemap,
    childView: SitemapItemView,
    childViewContainer : 'ul',

    initialize: function () {
      this.collection.fetch();
    }
  });
});
