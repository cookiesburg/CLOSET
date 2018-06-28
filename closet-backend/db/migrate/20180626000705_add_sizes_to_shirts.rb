class AddSizesToShirts < ActiveRecord::Migration[5.1]
  def change
    add_column :shirts, :sizes, :object
  end
end
