module Api::V1
  class ShirtsController < ApplicationController
    def index
      @shirts = Shirt.order("created_at DESC")
      render json: @shirts
    end

    def show
      @shirt = Shirt.find(params[:id])
      render json: @shirt
    end

    def create
      @shirt = Shirt.create(shirt_params)
      render json: @shirt
    end

    private

    def shirt_params
      params.require(:shirt).permit(:brand, :desc, :neck, :sleeve_l, :sleeve_w, :chest, :shoulder, :midsection, :cuff, :length, :price)
    end

  end
end
