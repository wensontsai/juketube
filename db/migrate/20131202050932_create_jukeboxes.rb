class CreateJukeboxes < ActiveRecord::Migration
  def change
    create_table :jukeboxs do |t|
      t.integer :song_id
      t.integer :sequence
      t.boolean :already_played

      t.timestamps
    end
  end
end
