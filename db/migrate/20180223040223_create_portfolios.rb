class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.float :quantity
      t.references :user, foreign_key: true
      t.references :investment, foreign_key: true

      t.timestamps
    end
  end
end
