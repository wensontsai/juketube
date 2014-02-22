Juketube.SongsList = Backbone.Collection.extend({

  model: Juketube.SongItem,

  url: '/songs',

  initialize: function(){
    this.bind('reset', this.destroyView);
    // this.on('add', this.addOne, this);
    this.on('remove', this.hideModel);

    // Juketube.SongItem.fetch();
  },


  hideModel: function(Song){
    model.trigger('hide');
  },


  addOne: function(Song){
    var songsView = new Juketube.SongsView({ model: Song });
    this.$el.append(songsView.render().el);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);

  },

  render: function(){
    this.addAll();
  },

  destroyView: function() {
    //COMPLETELY UNBIND THE VIEW
    this.undelegateEvents();

    this.$el.removeData().unbind();

    //Remove view from DOM
    this.remove();
    Backbone.View.prototype.remove.call(this);

  }

});

Juketube.Songs = new Juketube.SongsList();



