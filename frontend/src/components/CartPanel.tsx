import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCartStore } from "./functions/cart";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

export default function CartPanel() {
  const navigate = useNavigate();
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

  function handleNavigateToCheckout() {
    if (cartItems.length == 0) {
      console.log("Nothing is in cart");
    } else navigate("/checkout");
  }

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
          <ItemList cartItems={cartItems} />
        </div>
        <Separator decorative className="w-full" />
        <div className="mx-5 my-5 flex justify-between">
          <p className="font-semibold">Subtotal (Tax Excl.)</p>
          <p className="text-2xl">{`$${estimatedTotal}.00`}</p>
        </div>
        <SheetFooter className="absolute bottom-20 flex h-fit w-full items-center py-5">
          <SheetClose asChild>
            <Button
              type="submit"
              className="h-12 w-[80%]"
              onClick={() => handleNavigateToCheckout()}
            >
              Checkout
            </Button>
          </SheetClose>
        </SheetFooter>

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
