class Api::InvestmentsController < ApplicationController
    def index
        @investments = User.find(params[:user_id]).investments
        render json: @investments
    end

    def show
        @investments = User.find(params[:user_id]).investments.find(params[:id])
        render json: @investments
    end

end
