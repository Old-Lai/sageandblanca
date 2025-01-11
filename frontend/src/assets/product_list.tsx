import bouquet_img from "@/assets/images/bouquet/bouquet-1.jpeg";
import arragement_img from "@/assets/images/arrangement/arrangement-1.jpeg";
import rose_img from "@/assets/images/rose/rose-1.jpeg";
import { Product } from "@/lib/interfaces";

export const productList: Record<string, Product> = {
  Bespoke_Bouquet: {
    name: "Bespoke Bouquet",
    category: "bouquet",
    description:
      "Whether you're seeking the perfect gift for a loved one or wanting to add a touch of elegance to your event, our stunning flower bouquets are crafted using the most beautiful flowers, with the utmost care and attention to detail.",
    size_options: [
      {
        value: "small",
        description: "Approx 15 stems of flowers",
        dollar: 85,
      },
      {
        value: "medium",
        description: "Approx 20 stems of flowers",
        dollar: 105,
      },
      {
        value: "large",
        description: "Approx 25 stems of flowers",
        dollar: 125,
      },
    ],
    additional_options: [],
    dollar: 85,
    cent: 0,
    image: bouquet_img,
  },
  Bespoke_Arrangement: {
    name: "Bespoke Arrangement",
    category: "arrangement",
    description:
      "At Sage & Blanca, we believe that the simple pleasure of flowers should be celebrated every day. Let our floral artistry transform your spaces with the joy and beauty of nature and elevate your space with our flower arrangements.",
    size_options: [
      {
        value: "small",
        description: "Approx 15 stems of flowers",
        dollar: 85,
      },
      {
        value: "medium",
        description: "Approx 20 stems of flowers",
        dollar: 105,
      },
      {
        value: "large",
        description: "Approx 25 stems of flowers",
        dollar: 125,
      },
    ],
    additional_options: ["vase"],
    dollar: 85,
    cent: 0,
    image: arragement_img,
  },
  Rose_Bouquet: {
    name: "Rose Bouquet",
    category: "rose",
    description:
      "Experience the timeless elegance of our hand-picked rose bouquets. Whether you're celebrating love, friendship, or simply brightening someone’s day, our stunning arrangements of fresh, vibrant roses are sure to leave a lasting impression.",
    size_options: [
      {
        value:"small",
        description: "Approx 12 stems of roses",
        dollar: 70,
      },
      {
        value:"medium",
        description: "Approx 24 stems of roses",
        dollar: 100,
      },
      {
        value:"large",
        description: "Approx 36 stems of roses",
        dollar: 140,
      },
    ],
    additional_options: ["vase", "premium packaging"],
    dollar: 70,
    cent: 0,
    image: rose_img,
  },
};
