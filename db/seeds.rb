# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

black_cotton_t = Article.create(
  brand: "Uniqlo",
  color: "black",
  description: "Basic black fitted t-shirt",
  material: "cotton",
  category: "top",
  subcategory: "t-shirt"
)

black_mockneck = Article.create(
  brand: "Uniqlo",
  color: "black",
  description: "Black crop mock neck",
  material: "cotton",
  category: "top",
  subcategory: "shirt"
)
