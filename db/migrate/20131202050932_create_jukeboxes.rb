class CreateJukeboxes < ActiveRecord::Migration
  def change
    create_table :jukeboxes do |t|
      t.integer :song_id
      t.integer :sequence
      t.boolean :already_played

      t.timestamps
    end
  end
end
