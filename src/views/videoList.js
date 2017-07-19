var VideoListView = Backbone.View.extend({
  
  initialize: function(para) {
    //this.collection.on('change', this.render, this);
    this.listenTo('collection', 'sync', this.render);
    this.activeModel = para.activeModel;
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video, activeModel: this.activeModel}).render().el;
      })
    );   

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
