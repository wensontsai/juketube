class Changecolumnnjukee < ActiveRecord::Migration
  def change
    # change_column :jukeboxes, :playlist_id, :integer
    change_column :jukeboxes, :playlist_id, 'integer USING CAST(playlist_id AS integer)'
  end
end
