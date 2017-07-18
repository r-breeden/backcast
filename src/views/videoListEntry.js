var VideoListEntryView = Backbone.View.extend({

  
  render: function() {
    // console.log(this.model);
    //this has nothign to do with this code//
    //new Aview({collection: this.collection, model: this.collection[x]});
    this.$el.html(this.template(this.model.attributes.snippet));
    return this;
  },

  //
  template: templateURL('src/templates/videoListEntry.html')

});
