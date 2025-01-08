import bouquet_img from "@/assets/images/bouquet/bouquet-1.jpeg"
import arragement_img from "@/assets/images/arrangement/arrangement-1.jpeg"
import rose_img from "@/assets/images/rose/rose-1.jpeg"
interface Product {
  name: string;
  dollar: number;
  cent: number;
  image: string;
}
export const productList: Record<string, Product> = {
  Bespoke_Bouquet: {
    name: "Bespoke Bouquet",
    dollar: 85,
    cent: 0,
    image: bouquet_img,
  },
  Bespoke_Arrangement: {
    name: "Bespoke Arrangement",
    dollar: 85,
    cent: 0,
    image: arragement_img,
  },
  Rose_Bouquet: {
    name: "Rose Bouquet",
    dollar: 70,
    cent: 0,
    image: rose_img,
  },
};
