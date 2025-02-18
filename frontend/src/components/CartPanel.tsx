import { X, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import CartItem from "./CartItem";

const tags = Array.from({ length: 10 }).map((_, i, a) => {
  return {
    id: `000${i*7}`,
    name: `product-${i} ${i%3 === 0 ? "testing test testing test testing test" : ""}`,
    price: `$${i}`,
    quantity: "1",
  };
});

export default function CartPanel() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart className="w-16" />
      </SheetTrigger>
      <SheetContent className="h-screen px-6" side="top">
        <SheetTitle className="-translate-y-2 text-sm">Cart</SheetTitle>
        <Separator decorative />

        <div className="h-[50%] w-full">
          <ScrollArea className="h-full w-full">
            <div>
              {tags.map((tag) => (
                <CartItem key={tag.name} item={tag}/>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="absolute bottom-0 flex h-fit w-full justify-center py-5">
          <Button className="h-12 w-[80%]">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
