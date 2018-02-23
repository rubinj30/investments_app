class CreateInvestments < ActiveRecord::Migration[5.1]
  def change
    create_table :investments do |t|
      t.string :ticker
      t.string :category
      
      t.timestamps
    end
  end
end
