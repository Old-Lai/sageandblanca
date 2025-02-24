import { useParams } from "react-router-dom";
import { ImageCarosel, ProductOptionMenu } from "@/components";
import { productList } from "@/assets/product_list";
import { imageList } from "@/assets/image_list";
import { formatCent } from "@/lib/formatCent";
import { OrderDetail, OrderItem } from "@/lib/interfaces";
import { useCartStore, cart } from "@/components/functions/cart";

export default function SingleProduct() {
  let { id: productId } = useParams();
  let imagesArr = imageList[productId as keyof typeof imageList];
  //check if valid productId
  let productCategory = Object.keys(productList).map((key) => {
    return productList[key as keyof Object].category;
  });
  let isValidProductId = productCategory.indexOf(`${productId}`) >= 0;

  //get info of the correct product matching productId
  let product = Object.keys(productList)
    .map((key) => {
      return productList[key as keyof Object].category == `${productId}`
        ? productList[key as keyof Object]
        : null;
    })
    .filter((item) => {
      return item !== null;
    })[0];
  let centDisplay = formatCent(product.cent);

  //handle Cart store and updates
  const updateItems = useCartStore((state) => state.update);

  function submitOrder(orderDetails: OrderDetail) {
    const ProductName = productId ?? "";
    let orderItem: OrderItem = {
      name: ProductName[0].toUpperCase() + ProductName.slice(1),
      unitCost: orderDetails.estimatedCost,
      quantity: 1,
      orderDetails,
    };
    let prevCart = cart.retrieve();
    if (prevCart.length == 0) {
      prevCart.push(orderItem);
    } else {
      let match = prevCart
        .map((item, index) => {
          let prevQuantity = item.quantity;
          orderItem.quantity = prevQuantity;
          if (JSON.stringify(item) == JSON.stringify(orderItem))
            return [index, prevQuantity];
        })
        .filter((found) => {
          return found !== undefined;
        })[0];

      orderItem.quantity = 1;

      if (!match) {
        prevCart.push(orderItem);
      } else {
        let index = match[0];
        let quantity = match[1] + 1;
        orderItem.quantity = quantity;
        prevCart[index] = orderItem;
      }
    }
    cart.store(prevCart);
    updateItems();
  }

  return (
    <div className="mx-5 my-20">
      {isValidProductId ? (
        <>
          <ImageCarosel images={imagesArr} />
          <h1 className="my-5 text-3xl font-semibold">{product.name}</h1>
          <p className="mb-10 text-xl font-semibold">
            from ${product.dollar}.{centDisplay}
          </p>
          <ProductOptionMenu
            className="w-full"
            additional_options={product.additional_options}
            size_options={product.size_options}
            submitOrder={submitOrder}
          />
        </>
      ) : (
        <h2>Invalid product id</h2>
      )}
    </div>
  );
}
