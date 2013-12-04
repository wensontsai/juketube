Juketube.Routers.Router = Backbone.Router.extend({


  routes: {
    "": "home",
    "songs/:id": 'show'
  },

  initialize: function(options){

    // if (typeof options != "undefined") {
    //   this.songsList = options.songsList;
    //   this.songsView = new Juketube.SongsView({ collection: this.songsList });
    //   $('#app').append(this.songsView.el);
    // }
  },

  start: function(){
    Backbone.history.start({ pushState: true });
  },

  index: function(){
    this.songsList.fetch();
  },

  show: function(id){
    alert(id);
    this.songsList.focusOnSongsList(id);
  },

  home: function() {
    //populate queue div (songs view)
    var playlistView = new Juketube.SongsView();

    //populate queue items (song view)
    // Juketube.Songs.fetch({
    //   success: function(){
    //   // on success create fill in items
    //   var playlistRowView = new Juketube.SongView( {collection: Juketube.Songs} );
    //   }
    // });
  }

});



