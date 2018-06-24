class CreateShirts < ActiveRecord::Migration[5.1]
  def change
    create_table :shirts do |t|
      t.string :brand
      t.string :desc
      t.float :neck
      t.float :sleeve_l
      t.float :sleeve_w
      t.float :shoulder
      t.float :chest
      t.float :midsection
      t.float :cuff
      t.float :length
      t.float :price

      t.timestamps
    end
  end
end
