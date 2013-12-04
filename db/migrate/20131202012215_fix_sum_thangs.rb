class FixSumThangs < ActiveRecord::Migration
  def change
      add_column :playlists, :url, :text
      change_column :jukeboxes, :song, :current_playlist

  end
end
