Juketube.SongView = Backbone.View.extend({


  template: JST['songlisting'],

  tagName: 'li',

  events: {
    'click #remove' : 'clear'
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);     
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

  togglePlayed: function() {

  },

  clear: function(){
    this.model.destroy();
  }
});
