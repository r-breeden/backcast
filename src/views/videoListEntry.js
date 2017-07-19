var VideoListEntryView = Backbone.View.extend({

  event: {
    'click .video-list-entry-title': 'onTitleClick'
  },  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  onTitleClick: function() {
    
  },

  //
  template: templateURL('src/templates/videoListEntry.html')

});
