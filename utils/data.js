import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Dominic",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Stella",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  vinyl: [
    {
      name: "Led Zeppelin I",
      slug: "led-zeppelin-i",
      genre: "Classic Rock",
      image: "/images/lz1.png",
      price: 20,
      artist: "Led Zeppelin",
      rating: 5.0,
      numReviews: 8,
      countInStock: 2,
      description:
        "Debut studio album by English rock band Led Zeppelin. It was released on 12 January 1969 in the United States and on 31 March in the United Kingdom by Atlantic Records.",
    },
    {
      name: "Abbey Road",
      slug: "abbey-road",
      genre: "Classic Rock",
      image: "/images/ar1.jpeg",
      price: 25,
      artist: "The Beatles",
      rating: 4.9,
      numReviews: 9,
      countInStock: 1,
      description:
        "Abbey Road is the eleventh studio album by the English rock band the Beatles.",
    },
    {
      name: "UMO",
      slug: "unknown-mortal-orchestra",
      genre: "Indie Rock",
      image: "/images/umo1.jpeg",
      price: 20,
      artist: "UMO",
      rating: 4.0,
      numReviews: 20,
      countInStock: 10,
      description:
        "Unknown Mortal Orchestra is the debut album by the New Zealand rock band Unknown Mortal Orchestra, released on 21 June 2011 on Fat Possum Records.",
    },
    {
      name: "DAMN",
      slug: "damn",
      genre: "Rap",
      image: "/images/damn1.png",
      price: 30,
      artist: "Kendrick Lamar",
      rating: 5.0,
      numReviews: 99,
      countInStock: 15,
      description:
        "DAMN is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, through Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.",
    },
    {
      name: "Lonerism",
      slug: "lonerism",
      genre: "Psychedelic Rock",
      image: "/images/tame1.png",
      price: 25,
      artist: "Tame Impala",
      rating: 4.8,
      numReviews: 15,
      countInStock: 5,
      description:
        "Lonerism is the second studio album by Australian musical project Tame Impala. It was released on 5 October 2012 by Modular Recordings.",
    },
    {
      name: "Madvillainy",
      slug: "madvillainy",
      genre: "Hip-Hop",
      image: "/images/madvillainy.png",
      price: 25,
      artist: "Madvillain",
      rating: 4.8,
      numReviews: 12,
      countInStock: 5,
      description:
        "Madvillainy is a collaboration between rapper MF Doom and producer Madlib, released on March 23, 2004, on Stones Throw Records. It is widely regarded as one of the greatest underground hip-hop albums of all time.",
    },
    {
      name: "Room on Fire",
      slug: "room-on-fire",
      genre: "Indie Rock",
      image: "/images/ts1.jpeg",
      price: 28,
      artist: "The Strokes",
      rating: 4.7,
      numReviews: 18,
      countInStock: 6,
      description:
        "Room on Fire is the second studio album by American rock band The Strokes, released on October 28, 2003.",
    },
    {
      name: "Before Today",
      slug: "before-today",
      genre: "Psychedelic Pop",
      image: "/images/ariel2.jpeg",
      price: 18,
      artist: "Ariel Pink",
      rating: 4.1,
      numReviews: 10,
      countInStock: 2,
      description:
        "Before Today is the eighth studio album by American recording artist Ariel Pink, released on June 8, 2010.",
      isFeatured: true,
      banner: "/images/ariel2.png",
    },
    {
      name: "Yellow House",
      slug: "yellow-house",
      genre: "Indie Rock",
      image: "/images/gb1.jpeg",
      price: 22,
      artist: "Grizzly Bear",
      rating: 4.5,
      numReviews: 12,
      countInStock: 3,
      description:
        "Yellow House is the second studio album by American indie rock band Grizzly Bear, released on September 5, 2006, on Warp Records.",
    },
    {
      name: "Paranoid",
      slug: "paranoid",
      genre: "Heavy Metal",
      image: "/images/bs1.jpeg",
      price: 23,
      artist: "Black Sabbath",
      rating: 4.8,
      numReviews: 18,
      countInStock: 7,
      description:
        "Paranoid is the second studio album by English rock band Black Sabbath, released on September 18, 1970, on Vertigo Records.",
    },
    {
      name: "Homogenic",
      slug: "homogenic",
      genre: "Art Pop",
      image: "/images/homogenic.png",
      price: 25,
      artist: "Bjork",
      rating: 4.8,
      numReviews: 15,
      countInStock: 5,
      description:
        "Homogenic is the fourth studio album by Icelandic singer Bjork. It was released in 1997 and marked a stylistic shift towards a more experimental and electronic sound.",
    },
    {
      name: "Person Pitch",
      slug: "person-pitch",
      genre: "Experimental Pop",
      image: "/images/person-pitch.png",
      price: 22,
      artist: "Panda Bear",
      rating: 4.5,
      numReviews: 12,
      countInStock: 3,
      description:
        "Person Pitch is the third studio album by American musician Panda Bear. It was released in 2007 and is known for its use of sampling and layered vocals.",
      isFeatured: true,
      banner: "/images/ppb.png"
    },
  ],
};

export default data;
