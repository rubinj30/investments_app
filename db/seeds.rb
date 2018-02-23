# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   investments = Investment.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', investment: investments.first)

User.destroy_all
Investment.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

investment1 = Investment.create(ticker: 'AMZN', category: 'stock')
investment2 = Investment.create(ticker: 'HD', category: 'stock')
investment3 = Investment.create(ticker: 'FB', category: 'stock')
investment4 = Investment.create(ticker: 'AAPL', category: 'stock')
investment5 = Investment.create(ticker: 'TSLA', category: 'stock')
investment6 = Investment.create(ticker: 'LTC', category: 'crypto')
investment7 = Investment.create(ticker: 'DOGE', category: 'crypto')
investment8 = Investment.create(ticker: 'BTC', category: 'crypto')
investment9 = Investment.create(ticker: 'BCH', category: 'crypto')

user = User.create(username: 'warren_buffet', email: 'warren@berkshire.com', password: 'password')
user.investments << investment2
user.investments << investment4
user.investments << investment5
user.investments << investment9
user.investments << investment7
user.portfolios.find(1).update!(quantity: 12)
user.portfolios.find(2).update!(quantity: 7)
user.portfolios.find(3).update!(quantity: 20)
user.portfolios.find(4).update!(quantity: 5)
user.portfolios.find(5).update!(quantity: 6)

user = User.create(username: 'shkreli_wu', email: 'martinshkreli@yahoo.com', password: 'password')
user.investments << investment1
user.investments << investment3
user.investments << investment4
user.investments << investment8
user.portfolios.find(6).update!(quantity: 3)
user.portfolios.find(7).update!(quantity: 7)
user.portfolios.find(8).update!(quantity: 3)
user.portfolios.find(9).update!(quantity: 2)

user = User.create(username: 'wolf-o-wall-st', email: 'leo@something.com', password: 'password')
user.investments << investment3
user.investments << investment6
user.investments << investment8
user.portfolios.find(10).update!(quantity: 1)
user.portfolios.find(11).update!(quantity: 1)
user.portfolios.find(12).update!(quantity: 2)