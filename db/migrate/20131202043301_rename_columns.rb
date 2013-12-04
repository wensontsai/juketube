class RenameColumns < ActiveRecord::Migration
  def change

    rename_column :songs, :song, :artist
    add_column :songs, :song_title, :text

  end
end
