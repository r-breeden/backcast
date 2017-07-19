var VideoPlayerView = Backbone.View.extend({

  initialize: function (para) {
    this.activeModel = para.activeModel;

    this.listenTo(this.activeModel, 'change', this.updateModel);
  },

  render: function() {
    //this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  updateModel: function() {
    this.model = this.activeModel.get('activeModel');
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
