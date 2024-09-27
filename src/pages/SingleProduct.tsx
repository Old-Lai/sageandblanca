import banner from "@/assets/temp/temp-banner.jpeg";
import image2 from "@/assets/temp/temp-image.jpg";
import { useParams } from "react-router-dom";
import { ImageCarosel, ProductOptionMenu } from "@/components";
import products from "@/assets/temp/productTest.json";

interface Product {
  name: string;
  dollar: string;
  cent: string;
  image: string;
}

export default function SingleProduct() {
  let { id: productId } = useParams();
  const images = [
    { url: banner, alt: "Image 1" },
    { url: image2, alt: "Image 2" },
    { url: banner, alt: "Image 3" },
    // Add more images here...
  ];

  productId = productId ? productId : "0";

  let product: Product = products["1"];

  console.log(product);
  return (
    <div className="mx-5 my-20">
      <ImageCarosel images={images} />
      <h1 className="my-5 text-3xl font-semibold">Rose Bouquet</h1>
      <p className="text-xl font-semibold mb-10">from $90.00</p>
      <ProductOptionMenu className="w-full"/>
    </div>
  );
}
