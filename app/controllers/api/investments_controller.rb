class Api::InvestmentsController < ApplicationController
    def index
        @investments = User.find(params[:user_id]).investments
        render json: @investments
    end

    def show
        @investment = User.find(params[:user_id]).investments.find(params[:id])
        render json: @investment
    end

    def create
        @user = User.find(params[:id])
        @investment = Investment.create!(investment_params)
        
        render json: @investment
    end
    
    def destroy
        @investment = User.find(params[:user_id]).investments.find(params[:id])
        @investment.destroy
        render json: @investment
    end

    def update
        @investment = User.find(params[:user_id]).investments.find(params[:id])

        render json: @investment
    end

    private
    def investment_params
        params.require(:investment).permit(:ticker, :category)
    end
end
