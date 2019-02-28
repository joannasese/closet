class AddBrandToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :brand, :string
  end
end
