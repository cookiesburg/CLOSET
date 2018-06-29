module Api::V1
  class UserController < ApplicationController
    def create
      @user = User.create(user_params)
      render json: @user
    end

    def index
      @users = User.order("created_at DESC")
      render json: @users
    end

    def show
      @user = User.find(params[:id])
      render json: @user
    end

    private

    def user_params
      params.require(:user).permit(:name, :neck, :l_sleeve, :w_sleeve, :sldr, :chest, :mid, :cuff, :length)
    end
end

end
