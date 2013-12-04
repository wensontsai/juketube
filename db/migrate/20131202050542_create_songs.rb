class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :user_id
      t.text :artist
      t.text :title
      t.text :url

      t.timestamps
    end
  end
end
