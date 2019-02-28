class RenameKindToCategory < ActiveRecord::Migration[5.2]
  def change
    rename_column :articles, :kind, :category
    rename_column :shoes, :kind, :category
  end
end
