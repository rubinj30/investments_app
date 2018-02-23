class User < ApplicationRecord
    has_many :portfolios, dependent: :destroy
    has_many :investments, through: :portfolios
end
