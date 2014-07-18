define([
  'marionette',
  'views/sitemapCompositeView'
],

function (Marionette, SitemapCompositeView) {
  'use strict';

  return Marionette.CollectionView.extend({
    childView: SitemapCompositeView,

    initialize: function () {
      this.collection.fetch();
    }
  });
});
