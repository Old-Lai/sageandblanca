import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components";
import { productList } from "@/assets/product_list";

export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 w-full">
      <div className="mb-10 flex w-full flex-wrap justify-between px-5">
        {Object.keys(productList).map((productKey) => {
          const product = productList[productKey as keyof Object];
          return (
            <div
              key={"product-card-" + product.category}
              className="flex flex-col"
            >
              <ProductCard
                size="medium"
                image={product.image}
                name={`${product.name}`}
                dollar={product.dollar}
                cent={product.cent}
                productId={`${product.category}`}
              />
              <button
                className="mb-4 rounded-md bg-gray-200 py-2"
                onClick={() => {
                  navigate(`/product/${product.category}`);
                }}
              >
                Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
