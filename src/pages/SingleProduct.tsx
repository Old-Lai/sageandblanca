import { useParams } from "react-router-dom";
import { ImageCarosel } from "@/components";

export default function SingleProduct() {
  const { id } = useParams();

  return (
    <div className="my-20 mx-5">
      <ImageCarosel />
    </div>
  );
}
