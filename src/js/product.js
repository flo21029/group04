import { getParams, getCartItemsQty } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");

const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);

getCartItemsQty(".cart-qty");
product.init();
