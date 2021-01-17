# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# usuario = [
#             {
#                 nick:"admin",
#                 passwd:"adm",
#                 name:"Elje",
#                 srname:"fazo",
#                 phone: 928365878,
#                 adress:"Casa de la pizza HQ",
#                 email:"correodejefazo@gmail.com",
#                 type: 1
#             },
#         ]

# usuario.each do |usuarios|
# 	User.create(usuarios)
# end
producto= Product.create([name: 'Pizza Margarita',logo:"",ingredients: "test", description: "test",price: 52,category_id:1])

