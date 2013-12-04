Juketube.SongItem = Backbone.Model.extend({
  urlRoot: '/songs',

  defaults: {
    title: 'I Love It',
    artist: 'Icona Pop'
  }

});


// songItem.fetch();

// songItem.set({already_played: 'true'});
// songItem.save();

// var JukeboxSong = Backbone.Model.extend({

//   urlRoot: '/jukebox',

//   toggleStatus: function(){
//     if(this.get('status') === 'not yet played'){
//       this.set({'status': 'played'});
//     }else{
//       this.set({'status': 'not yet played'});
//     }
//     this.save();
//   }

// });



// jukeboxSong.fetch();
// jukeboxSong.get('song');
// jukeboxSong.set({status: 'played'});
// jukeboxSong.save();

