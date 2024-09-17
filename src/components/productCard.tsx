
export default function ProductCard(props: { name: string, image: string, dollar: number, cent?: number }) {
    const { name, image, dollar, cent } = props;
    console.log(cent)
    return (
        <div className="my-5">
          <div className="h-full w-full">
            <img src={image} className="h-[600px] object-cover" />
          </div>
          <div className="my-3">
            <h1 className="text-3xl">{name}</h1>
            <h2 className="text-2xl">${dollar}.{cent == 0 || !cent ? "00" : cent < 10 ? `0${cent}` : `${cent}`}</h2>
          </div>
        </div>
    )
}