class FixColumnType < ActiveRecord::Migration
  def change
    change_column :users, :playlist_id, 'integer USING CAST(column_to_change AS integer)'
