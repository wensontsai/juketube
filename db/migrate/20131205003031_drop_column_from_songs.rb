class DropColumnFromSongs < ActiveRecord::Migration
  def change
    remove_column :songs, :times_played
  end
end
