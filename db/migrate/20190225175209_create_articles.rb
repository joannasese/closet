class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :color
      t.string :description
      t.string :material
      t.string :type

      t.timestamps
    end
  end
end
