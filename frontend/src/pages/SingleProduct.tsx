import { useParams } from "react-router-dom";
import { ImageCarosel, ProductOptionMenu } from "@/components";
import { productList } from "@/assets/product_list";
import { imageList } from "@/assets/image_list";
import { formatCent } from "@/lib/formatCent";

export default function SingleProduct() {
  let { id: productId } = useParams();
  let productCategory = Object.keys(productList).map((key) => {
    return productList[key as keyof Object].category;
  });
  let isValidProductId = productCategory.indexOf(`${productId}`) >= 0;
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
  let imagesArr = imageList[productId as keyof typeof imageList];

  function submitOrder(value: Object) {
    console.log(value);
    console.log("add to cart");
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
