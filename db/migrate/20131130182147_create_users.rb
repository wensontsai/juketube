class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :playlist

      t.timestamps
    end
  end
end
