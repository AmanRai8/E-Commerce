import product  from '../model/product.model.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await product.find({});
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};
