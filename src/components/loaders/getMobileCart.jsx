import { getStoredCart } from "../../utilities/fakeDB";

// setCart(newArr)

export const cartData = async () => {
  const mobileData = await fetch("Mobiles.json");
  const products = await mobileData.json();
  const savedCart = getStoredCart();
  let cartArray = [];

  for (const id in savedCart) {
    const foundProduct = products.find((mobile) => mobile.id === parseInt(id));
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      cartArray.push(foundProduct);
    }
  }
  return { cartArray, products };
};
