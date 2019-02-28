class AddSubcategory < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :subcategory, :string
    add_column :articles, :subcategory, :string
  end
end
