module Api::V1
  class BrandsController < ApplicationController
    def create
      @brand = Brand.create(brand_params)
      render json: @brand
    end

    def index
      @brands = Brand.order("created_at DESC")
      render json: @brands
    end

    private

    def brand_params
      params.require(:brand).permit(:name)
    end
  end
end
