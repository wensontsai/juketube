class RenameTables < ActiveRecord::Migration
  def change
    rename_table :playlists, :songs

  end
end
