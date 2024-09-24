import { useNavigate } from "react-router-dom";

export default function ProductCard(props: {
  size?: string;
  productId: string;
  name: string;
  image: string;
  dollar: number;
  cent?: number;
}) {
  const productCardStyle: Record<string, Record<string, string>> = {
    default: {
      card: "",
      image: "h-[600px]",
      name: "text-[1.7rem]",
      cost: "flex text-[1.2rem]",
    },
    large: {
      card: "",
      image: "h-[600px]",
      name: "text-[1.7rem]",
      cost: "flex text-[1.2rem]",
    },
    small: {
      card: "w-[calc(50%-0.5rem)]",
      image: "h-[calc(100%/2-0.5rem)] aspect-square",
      name: "text-[1.7rem] text-center",
      cost: "text-[1.2rem] justify-center",
    },
  };
  let { size, productId, name, image, dollar, cent } = props;
  if (!size) {
    size = "default";
  }

  const navigate = useNavigate();

  return (
    <div
      className={`${productCardStyle[size].card} my-5`}
      onClick={() => {
        console.log("clicked ", productId);
        navigate(`/product/${productId}`);
      }}
    >
      <div>
        <img
          src={image}
          className={`${productCardStyle[size].image} object-cover`}
        />
      </div>
      <div className="my-2">
        <h1 className={`${productCardStyle[size].name}`}>{name}</h1>
        <div className={`${productCardStyle[size].cost} flex`}>
          <h2 className="mr-2"> from </h2>
          <h2>
            ${dollar}.
            {cent == 0 || !cent ? "00" : cent < 10 ? `0${cent}` : `${cent}`}
          </h2>
        </div>
      </div>
    </div>
  );
}
//
