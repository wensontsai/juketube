class ChangeSongsColumn < ActiveRecord::Migration
  def change

    change_column :songs, :song_title, :title

  end
end
