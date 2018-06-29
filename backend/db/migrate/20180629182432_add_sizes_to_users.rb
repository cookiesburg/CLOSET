class AddSizesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :neck, :float
    add_column :users, :l_sleeve, :float
    add_column :users, :w_sleeve, :float
    add_column :users, :sldr, :float
    add_column :users, :chest, :float
    add_column :users, :mid, :float
    add_column :users, :cuff, :float
    add_column :users, :length, :float
  end
end
