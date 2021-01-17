class Categories < ActiveRecord::Migration[6.1]
  def self.up
  	create_table :categories do|t|
  		t.string :name
  	end
  	Category.create :name =>"recomendaciones"
  	Category.create :name =>"pizzas"
  	Category.create :name =>"hamburguesas"
  	Category.create :name =>"bebidas"
  	Category.create :name =>"complementos"
  end
end
