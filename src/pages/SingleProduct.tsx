import banner from "@/assets/temp/temp-banner.jpeg";
import image2 from "@/assets/temp/temp-image.jpg";
import { useParams } from "react-router-dom";
import { ImageCarosel } from "@/components";
import products from "@/assets/temp/productTest.json";

interface Product {
    name: string,
    dollar: string,
    cent: string,
    image: string,
}

export default function SingleProduct() {
  let { id: productId }  = useParams();
  const images = [
    { url: banner, alt: "Image 1" },
    { url: image2, alt: "Image 2" },
    { url: banner, alt: "Image 3" },
    // Add more images here...
  ];

  productId = productId? productId : "0";
  
  let product: Product = products["1"];

  console.log(product)
  return (
    <div className="my-20 mx-5">
      <ImageCarosel images={images}/>
      <div>
        
      </div>
    </div>
  );
}
