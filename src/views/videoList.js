var VideoListView = Backbone.View.extend({

  initialize: function(){
    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    //refactor the videolistview to dynamically render one vidoelistentry view for each video object ...
    for ( var i = 0; i < this.collection.length; i++){
      this.videoListEntryView = new VideoListEntryView({model: this.collection[i]});
      this.videoListEntryView.render();

    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
