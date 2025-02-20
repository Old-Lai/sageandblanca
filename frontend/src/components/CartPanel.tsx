import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: string;
  quantity: string;
}

export default function CartPanel() {
  const [cartItems, setCartItems] = useState<Array<Item>>([]);

  useEffect(() => {
    const ItemStr = window.localStorage.getItem("cart");
    let storedItems = ItemStr?.split(";").map((item) => JSON.parse(item));
    if (storedItems && storedItems.length > 0) {
      console.log(storedItems);
      setCartItems(storedItems);
    }
  }, []);
  return (
    <Sheet>
      <SheetTrigger>
        {cartItems.length != 0 && (
          <div className="absolute top-[15%] w-5 translate-x-9 text-center text-xs font-semibold">
            {cartItems.length}
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
            <div>
              {cartItems.map((tag, i) => {
                return (
                  <div key={tag.name}>
                    <CartItem item={tag} />
                    {i != cartItems.length - 1 && (
                      <Separator decorative className="my-1" />
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
        <Separator decorative className="w-full" />
        <p className="mt-5 px-5 text-sm">Tmporary text</p>
        <div className="absolute bottom-20 left-0 flex h-fit w-full justify-center py-5">
          <Button className="h-12 w-[80%]">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
