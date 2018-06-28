class ShirtSerializer < ApplicationSerializer
  attributes :id, :brand_id, :price, :desc, :neck, :l_sleeve, :w_sleeve, :slder, :chest, :mid, :cuff, :length
  belongs_to :brand
end
