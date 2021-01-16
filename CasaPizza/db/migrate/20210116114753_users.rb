class Users < ActiveRecord::Migration[6.1]
	def self.up
	    create_table :users do |t|
	      t.string :nick
	      t.string :passwd
	      t.string :name
	      t.string :srname
	      t.integer :phone
	      t.string :adress
	      t.string :email
	      t.integer :type

	      t.timestamps
	    end
	end

  def self.down
  	drop_table :books
  end

end
