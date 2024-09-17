import banner from "@/assets/temp/temp-banner.jpeg";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <>
      <section className="flex h-[95vh] items-center justify-center bg-gray-800">
        <img
          src={banner}
          className="absolute left-0 top-0 h-[95vh] w-full object-cover"
        />
        <h1 className="z-10 text-[2.9rem] font-bold text-white">
          Bespoke Blooms
        </h1>
      </section>
      <div className="mx-5 my-20 flex flex-col items-center justify-center">
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
        <ProductCard image={banner} name="Bouquet" dollar={90} cent={0}/>
      </div>
    </>
  );
}