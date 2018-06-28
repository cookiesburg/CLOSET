class CreateShirts < ActiveRecord::Migration[5.1]
  def change
    create_table :shirts do |t|
      t.integer :brand_id
      t.float :price
      t.text :desc
      t.float :neck
      t.float :l_sleeve
      t.float :w_sleeve
      t.float :slder
      t.float :chest
      t.float :mid
      t.float :cuff
      t.float :length

      t.timestamps
    end
  end
end
