class Addcolumntojukeboxes < ActiveRecord::Migration
  def change
    add_column :jukeboxes, :playlist_id, :integer
  end
end
