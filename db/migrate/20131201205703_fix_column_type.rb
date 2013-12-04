class FixColumnType < ActiveRecord::Migration
  def change
    change_column :users, :playlist_id, :integer

  end
end
