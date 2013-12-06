json.array!(@songs) do |song|
  json.extract! song, :id, :artist, :title, :user_id, :url, :video_id, :video_title
  json.url song_url(song, format: :json)
end
