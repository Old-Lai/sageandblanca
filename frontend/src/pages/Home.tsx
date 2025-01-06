import main_banner from "@/assets/images/main.jpeg";
import { OrderInquiryForm, ProductCard, ProductImageList } from "@/components";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productList } from "@/assets/product_list";

export default function Home() {
  console.log(productList)
  return (
    <>
      <section className="flex h-[95vh] items-center justify-center">
        <img
          src={main_banner}
          className="absolute left-0 top-0 -z-10 h-[95vh] w-full object-cover"
          alt="main banner flower bouquet"
        />
        <h1 className="text-[2.9rem] font-bold text-white">Bespoke Blooms {}</h1>
      </section>
      <div className="mx-5 mb-7 mt-20 flex flex-col items-center justify-center">
        <section>
          <h1 className="p-5 text-center text-3xl font-semibold">
            An expression of the season
          </h1>
          <p className="text-center text-lg font-light">
            Each bouquet is an one-of-a-kind creation. Simply pick a size and
            color tone and we'll do the magic. Freshest ingredients, creativity
            and suprises are guaranteed.
          </p>
        </section>
        {Object.keys(productList).map((product, index) => {
          return <ProductCard
            size="large"
            image={productList[product as keyof Object].image}
            name={`${productList[product as keyof Object].name}`}
            dollar={90 + index}
            cent={(index + 1) * 13}
            productId={`${index}`}
            key={"product-card-" + index.toString()}
          />
})}
        <Link to="/order">
          <Button className="h-14 rounded-full border-2 border-black bg-transparent px-10 text-black hover:border-transparent hover:bg-black hover:text-white">
            Shop Now
          </Button>
        </Link>
      </div>
      <img src={main_banner} className="h-[80vh] w-full object-cover" />
      <div className="mx-5 my-20 flex flex-col items-center justify-center">
        <section>
          <h1 className="p-5 text-center text-3xl font-semibold">
            Order Inquiry
          </h1>
          <p className="text-center text-lg font-light">
            For all inquiries, please send us a message using this form
          </p>
        </section>
        <OrderInquiryForm className="mt-5 w-full" />
      </div>
      <div className="mx-5 my-20 flex flex-col items-center justify-center">
        <ProductImageList
          images={[main_banner, main_banner, main_banner, main_banner, main_banner, main_banner]}
        />
      </div>
    </>
  );
}
