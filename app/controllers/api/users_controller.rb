class Api::UsersController < ApplicationController
    def index
        @users = User.all  
        render json: @users
    end

    def create
        @user = User.create!(user_params)
        puts @user
        render json: @user
    end

    def show
        @user = User.find(params[:id])
        @investments = @user.investments

        @data = {user: @user, investments: @investments}

        render json: @data
    end
    
    def update
        @user = User.find(params[:id])
        @user.update!(user_params)

        render json: @user
    end

    def destroy
        @user = User.find(params[:id]).destroy
        @users = User.all
        
        render json: @users
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
