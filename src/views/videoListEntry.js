var VideoListEntryView = Backbone.View.extend({


  render: function() {
    
    //this has nothign to do with this code//
    //new Aview({collection: this.collection, model: this.collection[x]});
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  //
  template: templateURL('src/templates/videoListEntry.html')

});
