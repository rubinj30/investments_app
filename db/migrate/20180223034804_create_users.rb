class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.integer :age
      t.string :email
      t.string :photo
      t.string :token_id

      t.timestamps
    end
  end
end
