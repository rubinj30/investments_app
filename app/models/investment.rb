class Investment < ApplicationRecord
    has_many :portfolios, dependent: :destroy
    has_many :users, through: :portfolios
end
