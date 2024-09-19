import { cn } from "@/lib/utils";

export default function productImageList(props: {
  className?: string;
  images: Array<string>;
}) {
  const { images, className } = props;

  return (
    <div
      className={cn(
        className,
        "flex w-full flex-wrap gap-4",
      )}
    >
      {images &&
        images.map((image, index) => (
          <img
            className="aspect-square w-[calc(100%/2-0.5rem)] object-cover hover:scale-125 transition duration-300"
            src={image}
            key={index}
            alt="product-image"
          />
        ))}
    </div>
  );
}
