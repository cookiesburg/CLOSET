class AddImgToShirt < ActiveRecord::Migration[5.1]
  def change
    add_column :shirts, :img_url, :string
  end
end
