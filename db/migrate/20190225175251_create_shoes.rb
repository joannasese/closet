class CreateShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes do |t|
      t.string :type
      t.string :material
      t.string :color
      t.string :description

      t.timestamps
    end
  end
end
