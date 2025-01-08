import bouquet_1 from "@/assets/images/bouquet/bouquet-1.jpeg";
import bouquet_2 from "@/assets/images/bouquet/bouquet-2.jpeg";
import bouquet_3 from "@/assets/images/bouquet/bouquet-3.jpeg";
import bouquet_4 from "@/assets/images/bouquet/bouquet-4.jpeg";
import arrangement_1 from "@/assets/images/arrangement/arrangement-1.jpeg";
import arrangement_2 from "@/assets/images/arrangement/arrangement-2.jpeg";
import arrangement_3 from "@/assets/images/arrangement/arrangement-3.jpeg";
import arrangement_4 from "@/assets/images/arrangement/arrangement-4.jpeg";
import rose_1 from "@/assets/images/rose/rose-1.jpeg";
import rose_2 from "@/assets/images/rose/rose-2.jpeg";
import rose_3 from "@/assets/images/rose/rose-3.jpeg";

interface ImageList {
  bouquet: Array<{ src: string; alt: string }>;
  arrangement: Array<{ src: string; alt: string }>;
  rose: Array<{ src: string; alt: string }>;
}

export const imageList: ImageList = {
  bouquet: [
    { src: bouquet_1, alt: "bouquet" },
    { src: bouquet_2, alt: "bouquet" },
    { src: bouquet_3, alt: "bouquet" },
    { src: bouquet_4, alt: "bouquet" },
  ],
  arrangement: [
    { src: arrangement_1, alt: "arrangement" },
    { src: arrangement_2, alt: "arrangement" },
    { src: arrangement_3, alt: "arrangement" },
    { src: arrangement_4, alt: "arrangement" },
  ],
  rose: [
    { src: rose_1, alt: "rose" },
    { src: rose_2, alt: "rose" },
    { src: rose_3, alt: "rose" },
  ],
};
