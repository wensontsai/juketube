class FixColumnType < ActiveRecord::Migration
  def change
    change_column :users, :playlist_id, 'integer USING CAST(playlist_id AS integer)'
  end
end
