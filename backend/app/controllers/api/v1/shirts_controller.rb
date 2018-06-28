module Api::V1
  class ShirtsController < ApplicationController
    def create
      @shirt = Shirt.create(shirt_params)
      render json: @shirt
    end

    def index
      @shirts = Shirt.order("created_at DESC")
      render json: @shirts, each_serializer: ShirtSerializer
    end

    private

    def shirt_params
      params.require(:shirt).permit(:brand_id, :price, :desc, :neck, :l_sleeve, :w_sleeve, :slder, :chest, :mid, :cuff, :length)
    end
  end
end
