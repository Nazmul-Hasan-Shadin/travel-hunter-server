const allCategoriesData = require("../../model/dataHubModel");



const insertData=async(req,res,nex)=>{
     
     const datas= req.body;
     console.log(datas);

     const result=await allCategoriesData.create(
        {
            "carData": [
          
        
        
                {
                    "image": "https://i.ibb.co/cD74RCN/car3.png",
                    "passenger_number": 4,
                    "bags_number": 2,
                    "star": 4.5,
                    "description": "Funky ride for groovy people.\nFeel the vibes with our psychedelic wagon!",
                    "car_name": "Groovy Wagon",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 60
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 6,
                    "bags_number": 3,
                    "star": 4.2,
                    "description": "Quirky spaceship for intergalactic adventures.\nBlast off into the unknown!",
                    "car_name": "Galactic Cruiser",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": false,
                    "price": 80
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/vzGxkj5/car1.png",
                    "passenger_number": 2,
                    "bags_number": 1,
                    "star": 3.8,
                    "description": "Tiny car, big heart.\nPerfect for cozy road trips with your favorite person!",
                    "car_name": "Compact Companion",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": false,
                    "drink_include": true,
                    "price": 45
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/J2PJcqp/cart4.png",
                    "passenger_number": 5,
                    "bags_number": 2,
                    "star": 4.0,
                    "description": "Safari adventure on wheels.\nRoar through the urban jungle in our wild explorer!",
                    "car_name": "Urban Safari",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": false,
                    "price": 70
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/J2PJcqp/cart4.png",
                    "passenger_number": 4,
                    "bags_number": 3,
                    "star": 4.7,
                    "description": "Classy convertible for breezy rides.\nFeel the wind in your hair and the envy on the streets!",
                    "car_name": "Chic Convertible",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 90
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 7,
                    "bags_number": 4,
                    "star": 4.3,
                    "description": "Big van, big plans.\nPack your bags, gather your friends, and hit the road with our adventure beast!",
                    "car_name": "Adventure Beast",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 100       ,"category":"car"
                  },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 2,
                    "bags_number": 1,
                    "star": 4.9,
                    "description": "Sleek sports car for speed demons.\nExperience the thrill of the road with our turbocharged beauty!",
                    "car_name": "Turbo Thriller",
                    "wifi": true,
                    "mobile_charger": false,
                    "bluetooth": true,
                    "drink_include": false,
                    "price": 120       ,"category":"car"
                  },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 3,
                    "bags_number": 2,
                    "star": 4.1,
                    "description": "Retro ride with a modern twist.\nCruise in style with our vintage-inspired charmer!",
                    "car_name": "Vintage Voyager",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 80
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 4,
                    "bags_number": 2,
                    "star": 4.4,
                    "description": "Magical mystery tour on wheels.\nJoin the adventure and make memories with our mystical ride!",
                    "car_name": "Mystic Explorer",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": false,
                    "price": 85
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 6,
                    "bags_number": 3,
                    "star": 4.6,
                    "description": "Futuristic car for tech enthusiasts.\nNavigate the future in our cutting-edge tech marvel!",
                    "car_name": "Tech Titan",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 110       ,"category":"car"
                  },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 5,
                    "bags_number": 2,
                    "star": 4.0,
                    "description": "City chic on four wheels.\nZip through the urban jungle with our sleek and stylish city cruiser!",
                    "car_name": "City Slicker",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": false,
                    "price": 75
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 4,
                    "bags_number": 2,
                    "star": 4.2,
                    "description": "Eco-friendly ride for nature lovers.\nReduce your carbon footprint with our green machine!",
                    "car_name": "Green Dream",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": false,
                    "drink_include": true,
                    "price": 65
                     ,"category":"car"    },
                  {
                    "image": "https://i.ibb.co/LdKZ6wN/car2.png",
                    "passenger_number": 2,
                    "bags_number": 1,
                    "star": 3.7,
                    "description": "Mellow ride for laid-back travelers.\nChill out and enjoy the scenic route with our easygoing cruiser!",
                    "car_name": "Laid-back Cruiser",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 50
                     ,"category":"car"    },
                  {
                    "image": "car14.jpg",
                    "passenger_number": 7,
                    "bags_number": 4,
                    "star": 4.3,
                    "description": "Bold and brash adventure on wheels.\nConquer the road with our fearless off-road explorer!",
                    "car_name": "Off-road Maverick",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": false,
                    "drink_include": false,
                    "price": 95
                     ,"category":"car"    },
                  {
                    "image": "car15.jpg",
                    "passenger_number": 5,
                    "bags_number": 3,
                    "star": 4.5,
                    "description": "Elegant limo for special occasions.\nArrive in style with our sophisticated and luxurious limousine!",
                    "car_name": "Luxe Limousine",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 150       ,"category":"car"
                  },
                  {
                    "image": "car16.jpg",
                    "passenger_number": 3,
                    "bags_number": 2,
                    "star": 4.0,
                    "description": "Sunny convertible for sunny days.\nFeel the warmth of the sun and the wind in your hair with our convertible charm!",
                    "car_name": "Sunny Convertible",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": false,
                    "drink_include": true,
                    "price": 100       ,
                    "category":"car"
                  },
                  {
                    "image": "car17.jpg",
                    "passenger_number": 4,
                    "bags_number": 2,
                    "star": 4.2,
                    "description": "Retro road trip with a twist.\nTravel back in time with our nostalgia-inducing classic cruiser!",
                    "car_name": "Nostalgic Cruiser",
                    "wifi": false,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 85
                     ,"category":"car"    },
                  {
                    "image": "car18.jpg",
                    "passenger_number": 6,
                    "bags_number": 3,
                    "star": 4.1,
                    "description": "Lively van for the ultimate party.\nTurn the music up and let the good times roll with our party-on-wheels!",
                    "car_name": "Party Van",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 120       ,
                    "category":"car"
                  },
                  {
                    "image": "car19.jpg",
                    "passenger_number": 4,
                    "bags_number": 2,
                    "star": 4.4,
                    "description": "Sleek and sporty for adrenaline junkies.\nFeel the thrill with our sporty speedster!",
                    "car_name": "Speedy Racer",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": false,
                    "price": 110       ,
                    "category":"car"
                  },
                  {
                    "image": "car20.jpg",
                    "passenger_number": 5,
                    "bags_number": 3,
                    "star": 4.6,
                    "description": "Majestic chariot for royal journeys.\nEmbark on a regal adventure with our luxurious chariot fit for a king!",
                    "car_name": "Royal Chariot",
                    "wifi": true,
                    "mobile_charger": true,
                    "bluetooth": true,
                    "drink_include": true,
                    "price": 180       ,
                    "category":"car"
                  }
                  
                
                  
                ],
        
             "hotelData": [
              {
                "hotelName": "Oceanfront Paradise",
                "price": 150,
                "location": "Coastal Haven",
                "star": 4.5,
                "details": "Escape to a serene oceanfront retreat. Immerse yourself in luxury with breathtaking views and unparalleled comfort.",
                "category": "hotel"
              },
              {
                "hotelName": "Cityscape Suites",
                "price": 120,
                "location": "Metropolitan Hub",
                "star": 4.2,
                "details": "Experience the buzz of the city in our stylish suites. Perfect for urban explorers and business travelers.",
                "category": "hotel"
              },
              {
                "hotelName": "Mountain Retreat Lodge",
                "price": 180,
                "location": "Scenic Mountains",
                "star": 4.7,
                "details": "Embrace nature's beauty at our mountain lodge. A tranquil escape for those seeking peace and adventure.",
                "category": "hotel"
              },
              {
                "hotelName": "Luxury Oasis Resort",
                "price": 250,
                "location": "Tropical Paradise",
                "star": 5.0,
                "details": "Indulge in unparalleled luxury surrounded by tropical beauty. Our resort offers a heavenly escape.",
                "category": "hotel"
              },
              {
                "hotelName": "Riverside Boutique Inn",
                "price": 100,
                "location": "Quaint Riverside",
                "star": 3.8,
                "details": "Charm meets comfort in our boutique inn by the riverside. A perfect blend of history and modern amenities.",
                "category": "hotel"
              },
              {
                "hotelName": "Ski Lodge Haven",
                "price": 200,
                "location": "Winter Wonderland",
                "star": 4.4,
                "details": "Cozy up in our ski lodge nestled in a winter wonderland. An idyllic retreat for snow enthusiasts.",
                "category": "hotel"
              },
              {
                "hotelName": "Historic Mansion Hotel",
                "price": 300,
                "location": "Cultural District",
                "star": 4.9,
                "details": "Step into a bygone era at our historic mansion hotel. Immerse yourself in timeless elegance and luxury.",
                "category": "hotel"
              },
              {
                "hotelName": "Garden View Resort",
                "price": 180,
                "location": "Botanical Gardens",
                "star": 4.6,
                "details": "Surround yourself with lush greenery at our garden view resort. A haven for nature lovers and relaxation seekers.",
                "category": "hotel"
              },
              {
                "hotelName": "Desert Oasis Inn",
                "price": 120,
                "location": "Sunny Desert",
                "star": 4.2,
                "details": "Experience the beauty of the desert at our oasis inn. Modern comforts meet the tranquility of the arid landscape.",
                "category": "hotel"
              },
              {
                "hotelName": "Historic Harbor Hotel",
                "price": 160,
                "location": "Maritime District",
                "star": 4.3,
                "details": "Immerse yourself in maritime history at our historic harbor hotel. A waterfront retreat with a touch of nostalgia.",
                "category": "hotel"
              },
              {
                "hotelName": "Urban Skyline Suites",
                "price": 220,
                "location": "Downtown Skyline",
                "star": 4.8,
                "details": "Enjoy panoramic views of the city from our urban skyline suites. Luxury living in the heart of the metropolis.",
                "category": "hotel"
              },
              {
                "hotelName": "Forest Retreat Lodge",
                "price": 190,
                "location": "Enchanted Forest",
                "star": 4.5,
                "details": "Find solace in the midst of nature at our forest retreat lodge. Unplug and rejuvenate in a magical woodland setting.",
                "category": "hotel"
              },
              {
                "hotelName": "Seaside Boutique Hotel",
                "price": 140,
                "location": "Charming Seaside",
                "star": 4.0,
                "details": "Experience seaside charm at our boutique hotel. Relax to the sound of waves and enjoy coastal elegance.",
                "category": "hotel"
              },
              {
                "hotelName": "Alpine Chalet Resort",
                "price": 260,
                "location": "Alpine Wonderland",
                "star": 4.7,
                "details": "Escape to our alpine chalet resort. Experience luxury in a snowy paradise with stunning mountain views.",
                "category": "hotel"
              },
              {
                "hotelName": "Serenity Spa Retreat",
                "price": 180,
                "location": "Tranquil Hills",
                "star": 4.4,
                "details": "Indulge in tranquility at our spa retreat. Revitalize your mind and body in the lap of serene hills.",
                "category": "hotel"
              },
              {
                "hotelName": "Epicurean Vineyard Inn",
                "price": 200,
                "location": "Vineyard Countryside",
                "star": 4.6,
                "details": "Unwind in the heart of vineyard country. Savor the good life at our epicurean inn surrounded by rolling hills.",
                "category": "hotel"
              },
              {
                "hotelName": "Majestic Castle Hotel",
                "price": 350,
                "location": "Regal Countryside",
                "star": 5.0,
                "details": "Live like royalty in our majestic castle hotel. A grand escape in a regal countryside setting.",
                "category": "hotel"
              },
              {
                "hotelName": "Quaint Countryside Lodge",
                "price": 170,
                "location": "Idyllic Countryside",
                "star": 4.3,
                "details": "Discover rustic charm at our countryside lodge. A peaceful retreat surrounded by picturesque landscapes.",
                "category": "hotel"
              },
              {
                "hotelName": "Tropical Paradise Resort",
                "price": 230,
                "location": "Exotic Islands",
                "star": 4.9,
                "details": "Bask in luxury on exotic islands. Our resort offers a tropical paradise for relaxation and adventure.",
                "category": "hotel"
              }
            
             ]
                
        }
     )

       res.json({message:result})
  console.log(result);

}

module.exports=insertData