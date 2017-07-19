var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'onTitleClick'
  },  

  intialize: function (para) {
    this.activeModel = para.activeModel;
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  onTitleClick: function() {
     this.activeModel.set('activeModel', this.model);
  },

  //
  template: templateURL('src/templates/videoListEntry.html')

});
