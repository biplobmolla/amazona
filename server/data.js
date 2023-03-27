import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Biplob",
      email: "admin@admin.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Tamim",
      email: "example@admin.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      name: "Nike Slim Pants",
      slug: "nike-slim-pants",
      category: "Pants",
      image: "/images/p2.jpg",
      price: 220,
      countInStock: 8,
      brand: "Nike",
      rating: 4,
      numReviews: 12,
      description: "High Quality Product",
    },
    {
      name: "Adidas Slim Shirts",
      slug: "adidas-slim-shirts",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 420,
      countInStock: 12,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 8,
      description: "High Quality Product",
    },
    {
      name: "Adidas Slim Pants",
      slug: "adidas-slim-pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 220,
      countInStock: 7,
      brand: "Adidas",
      rating: 3.4,
      numReviews: 10,
      description: "High Quality Product",
    },
  ],
};

export default data;
