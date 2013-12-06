class AddColumnToSongsAgain < ActiveRecord::Migration
  def change
    add_column :songs, :video_title, :text
    add_column :songs, :video_id, :string
    add_column :songs, :times_played, :integer
  end
end
