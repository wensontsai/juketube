Juketube.SongsView = Backbone.View.extend({

  template: JST['playlist'],

  el: '#songlist',

  events: {
    'click #add_to_queue'  : 'createOnClick',
    // 'click #add_to_queue'  : 'addToYouTube',
    'click .remove' : 'clear',
    'click .play' : 'play2'
  },

  initialize: function() {
    var self = this;

    this.collection = new Juketube.SongsList();
    var data = this.collection.fetch({
        success:function(collection) {
          console.log(data);
          self.render();

    // success: function(collection) {
    // // ** THIS CREATES THE COMMENT TEXTAREA FOR EACH QUESTION
    // var commentInputView = new app.NewCommentInputView({question_id:question_id, collection: self.commentCollection});
    // self.commentsView.append(commentInputView.render().el);
    // collection.each(function(comment) {
    //   // ** CREATES A COMMENT VIEW
    //   var commentView = new app.CommentView({model: comment});
    //   var html = commentView.render().el;
    //   self.commentsView.append(html);


      }
    });

    this.model = new Juketube.SongItem();



    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.collection, 'change', this.render, this);

    this.listenTo(this.model, 'destroy', this.remove)
    this.listenTo(this.collection, 'destroy', this.remove);    
  },


  render: function(){
    user_email = user_email;
    var songlist = {songs: this.collection.models.map(function(x) {
      // console.log(x);
      return x.toJSON() })

    };

    this.$el.html( this.template(songlist) );
    return this;

    // this.$el.html( this.template( this.model.toJSON() ) );
    // var songView = new Juketube.SongView({model: song});
    // return this;


  },

  newAttributes: function(){
    return {
      artist: artist,
      title: title,
      url : "https://www.youtube.com/watch?v=" + video_id,
      video_id: video_id,
      video_title: video_title,
      user_id : user_id
      };
    },

  // addToYouTube: function (e) {
  //   e.preventDefault();

  //   var request = '<?xml version="1.0" encoding="UTF-8"?>' +
  //       '<entry xmlns="http://www.w3.org/2005/Atom"'+
  //         'xmlns:yt="http://gdata.youtube.com/schemas/2007">' +
  //       '<id>VIDEO_ID</id>' +
  //       '<yt:position>1</yt:position>' +
  //       '</entry>';

  //   var headers = {
  //     'Host': 'gdata.youtube.com',
  //     'Content-Type': 'application/atom+xml',
  //     // 'Content-Length': 'CONTENT_LENGTH',
  //     'Authorization': 'Bearer ACCESS_TOKEN',
  //     'GData-Version': 2,
  //     'X-GData-Key': 'key=AIzaSyC2ck8yFy7yYRff1B0DTQAM9Cpu_ao8lSA'
  //   };

  //   $.post('/feeds/api/playlists/PLOiWtzAHWI7kghjD8Cl44gsHNIQ9p--Ws HTTP/1.1', request, headers, function(response) {
  //     alert(response);
  //   });
  // },


  createOnClick: function(e){
    e.preventDefault();
    artist = $(this.el).find('#artist_field').val();
    title = $(this.el).find('#title_field').val();
    keyword = artist + " " + title;

      //query call to add to juketube playlist
      // function post(url, data, headers, success){
      //   $.ajax({
      //     beforeSend: function(xhr){
      //         $.each(headers, function(key, val) {
      //           xhr.setRequestHeader(key, val);
      //         });
      //         xhr.setRequestHeader('Content-Length', data.length);
      //     },
      //     type: "POST",
      //     url: 'http://gdata.youtube.com/feeds/api/playlists/PLOiWtzAHWI7kghjD8Cl44gsHNIQ9p--Ws HTTP/1.1',
      //     contentType: 'application/atom+xml',
      //     data: data,
      //     success: function() {
      //       console.log("successfully added to playlist");
      //     }
      //   });
      // }
      //query youtube to persist to rails

      var self = this;


      $.ajax({
        type: "GET",
        url: 'http://gdata.youtube.com/feeds/api/videos?q='+keyword+'&format=5&max-results=1&v=2&alt=jsonc',
        dataType:"jsonp",
        success: function(response) {
          if(response.data.items) {
            $.each(response.data.items, function(i,data){
                 video_id = data.id;
                 video_title = data.title;

            });
            // console.log('data');
          } else {
                 video_title = "no video";
          }
          //append to DOM
          self.addOne();

        },
      });


  },


  addOne: function(event){
    if (event)
      event.preventDefault();
    var song = Juketube.Songs.create( this.newAttributes());
    var songView = new Juketube.SongView({model: song});
    this.$el.find("#playlist").append(songView.render().el);

          //clear input fields
          $('#artist_field').val('');
          $('#title_field').val('');
  },


  play2: function(event){
    event.preventDefault();

    $('.play').click(function(event){
       songID = $(this).attr("data-id");
       console.log(songID);

    var songAddress = "http://www.youtube.com/embed/"+songID;
    console.log(songAddress);
    $("#test_player").html("<iframe id='ytplayer' type='text/html' width='640' height='390' src=" +songAddress+ "?autoplay=1 frameborder='0' allowfullscreen></iframe>");

    });
  },




  clear: function(event){
  var _this = this;

    $( "#playlist" ).delegate( "button", "click", function() {
        var model_id = $(this).attr("data-id");  // model_id correct, and this = button
        console.log(model_id);
        this.model = _this.collection.get(model_id);


        $("#remove_"+model_id).remove();
        // Backbone.View.prototype.remove.call($("#remove_"+model_id));

        this.model.destroy();
        return this;

    });

  }

  });


