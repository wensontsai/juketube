Juketube.SongView = Backbone.View.extend({


  template: JST['songlisting'],

  tagName: 'li',

  events: {
    'click #remove' : 'clear'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);     
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    this.$el.attr('song_id', this.model.get('id'));
    return this;
  },

  clear: function(){
    this.model.destroy();
  }
});
