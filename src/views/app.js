var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.activeModel = new Backbone.Model();
    this.activeModel.set(undefined);

    this.render();
  }, 

  render: function() {
    this.$el.html(this.template());
    
    //why render at the end? 
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
      activeModel: this.activeModel,
    }).render();
    
    new SearchView({
      el: this.$('.search'),
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      //In order to pass VideoPlayerView one model
      //does one have to also pass a collection? prollllyyy 
      model: this.videos.at(0),
      collection: this.videos,
      activeModel: this.activeModel,
      
    }).render();
  },

  template: templateURL('src/templates/app.html')

});
