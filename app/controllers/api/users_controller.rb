class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :user_finder, only: [:show, :edit, :destroy]

  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { message: user.errors}, status: 400
    end
  end

  def show
    render json: @user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: {message: @user.errors}, status: 400
    end
  end

  def destroy
    if @user.destroy
      render status: 204
    else
      render json: { message: "unable to remove this user"}, status: 400
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :password)
    end
    def user_finder
      @user = User.find(params[:id])
    end
end
