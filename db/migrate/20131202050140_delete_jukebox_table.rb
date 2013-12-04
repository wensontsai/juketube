class DeleteJukeboxTable < ActiveRecord::Migration
  def change

    drop_table :jukeboxes
  end
end
