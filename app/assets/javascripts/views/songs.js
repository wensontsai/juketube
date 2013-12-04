Juketube.SongsView = Backbone.View.extend({

  template: JST['playlist'],

  el: '#songlist',

  events: {
    'click #add_to_queue'  : 'createOnClick'
  },

  initialize: function() {
    // this.listenTo(this.collection, 'reset', this.render);
    // this.collection.fetch();
    // this.listenTo(this.model, 'change', this.render);
    this.render();
  },


  render: function(){
    // this.$el.html( this.template( this.model.toJSON() ) );
    this.$el.html( this.template({}) );
    return this;
  },

  newAttributes: function(){
    return {
      artist: $(this.el).find('#artist_field').val(),
      title: $(this.el).find('#title_field').val(),
      already_played: false
      };
    },

  createOnClick: function(e){
    e.preventDefault();

    //append to DOM
    this.addOne();

    //clear input fields
    $('#artist_field').val('');
    $('#title_field').val('');
  },


  addOne: function(event){
    if (event)
      event.preventDefault();

    var song = Juketube.Songs.create( this.newAttributes() );
    var songView = new Juketube.SongView({model: song});
    this.$el.find("#playlist").append(songView.render().el);
  }


});


