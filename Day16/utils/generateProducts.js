// comment cuz i didnt wanted this to run all the time -_-

// const sequelize = require("../database");
// const Product = require("../models/Products");

// sequelize
//   .sync()
//   .then(async (...a) => {
//     const now = Date.now();
//     for (let i = 0; i < 100; i++) {
//       const productId = now + 1;
//       await Product.create({
//         title: `product title ${productId}`,
//         price: Math.floor(100 + Math.random() * 10000),
//         count: Math.floor(1 + Math.random() * 1000),
//         description: `product description ${productId}`,
//         image: `https://picsum.photos/100?product=${productId}`,
//       });
//     }
//   })
//   .catch(async (error) => {
//     await sequelize.close();
//     console.log(error);
//   })
//   .catch((error) => console.log(error));
