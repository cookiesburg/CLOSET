# == Schema Information
#
# Table name: shirts
#
#  id         :integer          not null, primary key
#  brand_id   :integer
#  price      :float
#  desc       :text
#  neck       :float
#  l_sleeve   :float
#  w_sleeve   :float
#  slder      :float
#  chest      :float
#  mid        :float
#  cuff       :float
#  length     :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  img_url    :string
#

require 'test_helper'

class ShirtTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
