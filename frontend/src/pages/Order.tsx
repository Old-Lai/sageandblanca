import banner from "@/assets/temp/temp-banner.jpeg";
import { ProductCard } from "@/components";
export default function Order() {
  return (
    <div className="mt-20 w-full">
      <div className="mb-10 flex w-full flex-wrap justify-between px-5">
        {Array.from({ length: 3 }).map((_, index) => (
            <ProductCard
              size="medium"
              image={banner}
              name={`Bouquet ${index + 1}`}
              dollar={90 + index}
              cent={index + 1}
              productId={`${index}`}
              key={"product-card-" + index.toString()}
             
            />
        ))}
      </div>
    </div>
  );
}
