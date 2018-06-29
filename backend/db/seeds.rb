# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brand.destroy_all

  brands = Brand.create([
    { name: 'J.CREW' },
    { name: 'CLUB MONACO' },
    { name: 'BROOKS BROTHERS' },
    { name: 'BANANA REPUBLIC' },
    { name: 'HUGO BOSS' },
    { name: 'BONOBOS' },
    { name: 'LEDBURY' },
    { name: 'GAP' },
  ])

  brand_ids = brands.map{ |b| b.id }

  p "Created #{Brand.count} brands"
  p brand_ids



Shirt.destroy_all

#grab all shirt id's and assign them a value to be the range of brand_id's in shirts

# put this all in an array?
  50.times do |index|
    Shirt.create!(brand_id: rand(81..88),
                  desc: 'Here is a description of the selected shirt. It probably contains some flowery language pertaining to where it is made and what it is made of.',
                  price: rand(20..100),
                  img_url: "img.url",
                  neck: rand(14..22),
                  l_sleeve: rand(18..25),
                  w_sleeve: rand(18..25),
                  slder: rand(18..25),
                  chest: rand(40..60),
                  mid: rand(40..60),
                  cuff: rand(9..14),
                  length: rand(35..55)
                )
    end

  p "Created #{Shirt.count} shirts"

User.destroy_all

users = User.create([
  { name: 'Eric Holzauer',
    neck: rand(14..22),
    l_sleeve: rand(18..25),
    w_sleeve: rand(18..25),
    sldr: rand(18..25),
    chest: rand(40..60),
    mid: rand(40..60),
    cuff: rand(9..14),
    length: rand(35..55)
  },
  { name: 'Jude Clark',
    neck: rand(14..22),
    l_sleeve: rand(18..25),
    w_sleeve: rand(18..25),
    sldr: rand(18..25),
    chest: rand(40..60),
    mid: rand(40..60),
    cuff: rand(9..14),
    length: rand(35..55)
  },
  { name: 'Nate Kearns',
    neck: rand(14..22),
    l_sleeve: rand(18..25),
    w_sleeve: rand(18..25),
    sldr: rand(18..25),
    chest: rand(40..60),
    mid: rand(40..60),
    cuff: rand(9..14),
    length: rand(35..55)
  },
  { name: 'Kenny Rampola',
    neck: rand(14..22),
    l_sleeve: rand(18..25),
    w_sleeve: rand(18..25),
    sldr: rand(18..25),
    chest: rand(40..60),
    mid: rand(40..60),
    cuff: rand(9..14),
    length: rand(35..55)
  },
  ])

  p "Created #{User.count} users"
