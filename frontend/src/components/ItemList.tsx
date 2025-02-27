import { OrderItem } from "@/lib/interfaces";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItem from "@/components/CartItem";
import { Separator } from "@/components/ui/separator";

interface Props {
  readonly cartItems: OrderItem[];
}

export default function ItemList(props: Props) {
  const { cartItems } = props;

  return (
    <ScrollArea className="h-full w-full">
      {cartItems.length > 0 ? (
        cartItems.map((tag, i) => {
          return (
            <div key={`${tag.name}-${i}`}>
              <CartItem item={tag} />
              {i != cartItems.length - 1 && (
                <Separator decorative className="my-1" />
              )}
            </div>
          );
        })
      ) : (
        <div className="">
          <h2 className="text-center text-2xl opacity-40">
            Nothing here so far...
          </h2>
        </div>
      )}
    </ScrollArea>
  );
}
