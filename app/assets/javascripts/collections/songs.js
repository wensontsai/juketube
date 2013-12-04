Juketube.SongsList = Backbone.Collection.extend({

  model: Juketube.SongItem,

  url: '/songs',

  initialize: function(){
    // this.on('add', this.addOne, this);
    // this.on('remove', this.hideModel);

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
  }

});

Juketube.Songs = new Juketube.SongsList();



// songsList.length();
// songsList.add(song1);
// songsList.at(0);
// songsList.get(1);
// songsList.remove(song1);
// songsList.fetch();

// songsList.on('event-name', function(){
//   alert('event-name happend!');
// });

// songsList.trigger('event-name');

// songsList.fetch();
// songsList.reset();

// songsList.forEach(function(song){
//   alert(song.get('url'));
// });


