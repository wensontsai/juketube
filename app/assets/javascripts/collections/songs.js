Juketube.SongsList = Backbone.Collection.extend({

  model: Juketube.SongItem,

  url: '/songs',

  initialize: function(){
    // this.bind('reset', this.destroyView);
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

  // destroyView: function() {
  //   //COMPLETELY UNBIND THE VIEW
  //   this.undelegateEvents();

  //   this.$el.removeData().unbind();

  //   //Remove view from DOM
  //   this.remove();
  //   Backbone.View.prototype.remove.call(this);

  // }

});

Juketube.Songs = new Juketube.SongsList();


 // pusher stuff
  var pusher = new Pusher('66755');
  var channel = pusher.subscribe('juketube90210');
  new Backpusher('juketube90210', Juketube.SongsList);

  //pusher stuff
      //notifier
        // var Application.Notifier = (function() {

        //     function Notifier() {
        //       _.extend(this, Backbone.Events);
        //       this.pusher = new Pusher(CHANNEL_ID);
        //       this.channels = {};
        //     }

        //     Notifier.prototype.subscribe = function(channel) {
        //       var self = this;
        //       this.channels[channel] = this.pusher.subscribe(channel);
        //       this.channels[channel].bind_all(function(event, data) {
        //         self.trigger(event, data);
        //       });
        //   };

        //   return Notifier;

        // })();

        // //initialize
        // Application.notifier = new Application.Notifier();
        // Application.notifier.subscribe("juketube90210");



