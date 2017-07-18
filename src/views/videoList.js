var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('change', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    // console.log('COLLECTION', this.collection);
   
    //refactor the videolistview to dynamically render one vidoelistentry view for each video object ...
    for ( var i = 0; i < this.collection.models.length; i++) {
      
      this.videoListEntryView = new VideoListEntryView({model: this.collection.models[i]});
      //console.log('MODEL');
      // console.log(this.collection.models[i]);
      this.videoListEntryView.render();
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
