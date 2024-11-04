import { useNavigate } from "react-router-dom";

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
  medium: {
    card: "flex flex-col justify-center items-center",
    image: "h-[300px]",
    name: "text-[1.3rem]",
    cost: "flex text-[1rem]",
  },
  small: {
    card: "w-[calc(50%-0.5rem)]",
    image: "h-[calc(100%/2-0.5rem)] aspect-square",
    name: "text-[1.7rem] text-center",
    cost: "text-[1.2rem] justify-center",
  },
};

export default function ProductCard(props: Readonly<{
  size?: string;
  productId: string;
  name: string;
  image: string;
  dollar: number;
  cent?: number;
}>) {
  let { size, productId, name, image, dollar, cent } = props;
  //variable for edited cent basedon the digits
  let centDisplay = "00"
  //format cent string (add 0 if less than 10, only takes first two digits if cent have three digits)
  if(cent && cent != 0)
    if(cent < 10)
      centDisplay = `0${cent}`
    else if(cent > 99)
      centDisplay = cent.toString().split('.')[0]
    else
      centDisplay = `${cent}`

  if (!size) {
    size = "default";
  }

  const navigate = useNavigate();

  return (
    <button
      className={`${productCardStyle[size].card} my-5`}
      onClick={() => {
        navigate(`/product/${productId}`);
      }}
    >
      <div>
        <img
          src={image}
          className={`${productCardStyle[size].image} object-cover`}
          alt="product"
        />
      </div>
      <div className="my-2">
        <h1 className={`${productCardStyle[size].name} text-left`}>{name}</h1>
        <div className={`${productCardStyle[size].cost} flex`}>
          <h2 className="mr-2"> from </h2>
          <h2>
            ${dollar}.
            {centDisplay}
          </h2>
        </div>
      </div>
    </button>
  );
}
//
