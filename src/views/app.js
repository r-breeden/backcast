var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    //member Jared's sass and the gd backbone hAlp
    this.videoListView = new VideoListView({collection: this.videos});

    this.render();
  },

  render: function(obj) {
    console.log(obj);
    this.$el.html(this.template(obj));
    return this;
  },

  template: templateURL('src/templates/app.html')

});
