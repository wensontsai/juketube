json.array!(@jukeboxes) do |jukebox|
  json.extract! jukebox, :id, :sequence, :already_played
  json.url jukebox_url(jukebox, format: :json)
end
