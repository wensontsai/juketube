Juketube.SongView = Backbone.View.extend({


  template: JST['songlisting'],

  tagName: 'li',

  events: {
    'click .remove' : 'clear',
    'click .play' : 'play2'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);     
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    // this.$el.attr('data-id', this.model.get('id'));
    return this;
  },




  onPlayerReady: function(event) {
    // event.target.playVideo();
    // event.this.setShuffle(shufflePlaylist: true);
  },


  onPlayerStateChange: function(event) {
    if (event.data) {
    }
  },


  onYouTubePlayerAPIReady: function(event) {
      player = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        videoId: songID,
        autoplay: 1,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
      });
  },

  play2: function(event){
    event.preventDefault();

    $('.play').click(function(event){
       songID = $(this).attr("data-id");
       console.log(songID);

    var songAddress = "http://www.youtube.com/embed/"+songID;
    console.log(songAddress);
    $("#test_player").html("<iframe id='ytplayer' type='text/html' width='640' height='390' src=" +songAddress+ "></iframe>");
    });
  },


  play: function(event){
    var self = this;
     $('.play').click(function(event){
       songID = $(this).attr("data-id");
       console.log(songID);
       $('#ytplayer').youTubeEmbed('http://www.youtube.com/watch?v='+songID);
       // ytplayer.cueVideoById(songID);
       // ytplayer.onYouTubePlayerAPIReady(songID);
    });
  },





  clear: function(){

    this.model.destroy();
    return this;
  }
});
