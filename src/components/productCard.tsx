export default function ProductCard(props: {
  name: string;
  image: string;
  dollar: number;
  cent?: number;
}) {
  const { name, image, dollar, cent } = props;
  return (
    <div className="my-5">
      <div className="h-full w-full">
        <img src={image} className="h-[600px] object-cover" />
      </div>
      <div className="my-2">
        <h1 className="text-[1.7rem]">{name}</h1>
        <div className="flex text-[1.2rem]">
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
