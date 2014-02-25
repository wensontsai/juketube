class SongsController < ApplicationController
  attr_accessor :current_user_email, :songs

  def index
    @songs = Song.all
  end

  def show
  end

  def new
    @song = Song.new
  end

  def edit
  end

  def create
    @song = Song.new(song_params)
    # @song.user.email = @current_user_email
    # @song_title = @song.title

    # Pusher.url = "http://e62120585d5bc2df212c:6c579741ff37a44ece9a@api.pusherapp.com/apps/59414"

    respond_to do |format|
      if @song.save

          # Pusher['juketube90210'].trigger!("post:change", "")

        # Pusher['question_1_questions'].trigger('new_question_event', @question.to_json)

        format.html { redirect_to @song, notice: 'A song was successfully created.' }
        format.json { render action: 'show', status: :created, location: @song }
      else
        format.html { render action: 'new' }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.json



  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    # @question.destroy
    #add a column to the database to fetch only the completed items
    # @question = @question.completed

    respond_to do |format|
      # Pusher['question_1_questions'].trigger('new_question_event', @question.to_json)
      format.html { redirect_to song_url }
      format.json { head :no_content }
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def song_params
      params.require(:song).permit(:user_id, :artist, :title, :url, :video_id, :video_title)
    end

end
