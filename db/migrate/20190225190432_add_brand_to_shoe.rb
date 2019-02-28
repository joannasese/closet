class AddBrandToShoe < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :brand, :string
  end
end
