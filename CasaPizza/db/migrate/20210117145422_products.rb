class Products < ActiveRecord::Migration[6.1]
	def self.up
    	create_table :products do |t|
      	  t.string :name
      	  t.string :logo
      	  t.string :ingredients
      	  t.string :description
      	  t.integer :price
      	  t.integer :category_id
      	  t.timestamps
    	end
  	end
  def self.down
  	drop_table :products
  end
end