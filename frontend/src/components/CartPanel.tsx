import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";
import { useEffect, useState } from "react";
import { useCartStore } from "./functions/cart";

export default function CartPanel() {
  const cartItems = useCartStore((state) => state.items);
  const updateItems = useCartStore((state) => state.update);
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  useEffect(() => {
    updateItems();
  }, []);

  useEffect(() => {
    let sum = cartItems
      .map((item) => item.quantity * item.unitCost)
      .reduce((prevSum, curSum) => prevSum + curSum, 0);
    setEstimatedTotal(sum);
  }, [cartItems]);

  return (
    <Sheet>
      <SheetTrigger>
        {cartItems.length != 0 && (
          <div className="absolute top-[15%] w-5 translate-x-9 text-center text-xs font-semibold">
            {cartItems.reduce(
              (prevQuantity, item) => prevQuantity + item.quantity,
              0,
            )}
          </div>
        )}
        <ShoppingCart className="w-16" />
      </SheetTrigger>
      <SheetContent
        className="h-screen p-0"
        side="top"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetTitle className="-translate-y-2 px-6 pt-6 text-sm">
          Cart
        </SheetTitle>
        <Separator decorative />
        <div className="h-[50%] w-full px-5">
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
        </div>
        <Separator decorative className="w-full" />
        <div className="mx-5 my-5 flex justify-between">
          <p className="font-semibold">Subtotal (Tax Excl.)</p>
          <p className="text-2xl">{`$${estimatedTotal}.00`}</p>
        </div>
        <div className="absolute bottom-20 left-0 flex h-fit w-full justify-center py-5">
          <Button className="h-12 w-[80%]">Checkout</Button>
        </div>
        <Button
          onClick={() => {
            window.localStorage.clear();
            updateItems();
          }}
        >
          (Dev) Clear Local Data
        </Button>
      </SheetContent>
    </Sheet>
  );
}
