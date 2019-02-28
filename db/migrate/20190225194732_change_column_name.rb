class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :articles, :type, :kind
    rename_column :shoes, :type, :kind
  end
end
