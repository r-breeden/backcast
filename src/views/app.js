var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.render();
  },

  render: function() {
    //this.$el.html(this.template());
    
    //why render at the end? 
    this.videoListView = new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
    }).render();
    
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
