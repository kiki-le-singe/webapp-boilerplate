define([
  'backbone',
  'views/movieCollectionView',
  'collections/movies',
  'views/searchForm'
],

function (Backbone, MovieCollectionView, Movies, SearchForm) {
  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.movies = new Movies();
      this.movieCollectionView = new MovieCollectionView({collection : this.movies});
      this.searchForm = new SearchForm();
    },

    render: function () {
      this.$el.append(this.searchForm.render().$el);
      this.$el.append(this.movieCollectionView.$el);
      return this;
    }
  });
});
