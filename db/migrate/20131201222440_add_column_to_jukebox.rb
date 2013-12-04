class AddColumnToJukebox < ActiveRecord::Migration
  def change
    add_column :jukeboxes, :song, :text
  end
end
