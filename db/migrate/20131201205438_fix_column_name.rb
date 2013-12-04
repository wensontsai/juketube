class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :playlist, :playlist_id
  end
end
