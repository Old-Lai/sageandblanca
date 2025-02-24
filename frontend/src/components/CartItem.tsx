import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderItem } from "@/lib/interfaces";
import { useState } from "react";
import { cart, useCartStore } from "./functions/cart";

interface Props {
  readonly item: OrderItem;
}

const TEMP_SELECTION = Array.from({ length: 10 });

export default function CartItem(props: Props) {
  const { item } = props;
  const updateItems = useCartStore((state) => state.update);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    item.quantity,
  );

  function updateQuantity(quantity: number) {
    setSelectedQuantity(quantity);
    let cartItems = cart.retrieve();
    let match = cartItems
      .map((cartItem, index) => {
        if (JSON.stringify(item) == JSON.stringify(cartItem))
          return [index, cartItem.quantity];
      })
      .filter((found) => found !== undefined)[0];

    if (match) {
      cartItems[match[0]].quantity = quantity;
      cart.store(cartItems);
      updateItems();
    }
  }

  return (
    <div>
      <div className="my-5 h-20">
        <div className="flex h-[55%] items-center">
          <div className="w-[80%] pr-3 font-semibold">{`${item.name} - ${item.orderDetails.size}`}</div>
          <div className="w-[20%]">
            <Select
              defaultValue={`${item.quantity}`}
              value={`${selectedQuantity}`}
              onValueChange={(val) => {
                updateQuantity(parseInt(val));
              }}
            >
              <SelectTrigger className="h-8 w-full rounded-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TEMP_SELECTION.map((_, i) => (
                    <SelectItem
                      key={`${item.name}-${i}`}
                      value={`${i + 1}`.toString()}
                    >
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex h-[45%] items-center text-xs">
          <div className="w-[80%]">
            <p>{`Color: ${item.orderDetails.colorTone || "Daily Picks"}`}</p>
            {item.orderDetails.allergies == "Yes" && (
              <p>{`Allergies: ${item.orderDetails.allergies || "Default"} - ${item.orderDetails.allergiesText}`}</p>
            )}
          </div>
          <div className="right-0 w-[20%] text-right">
            {item.unitCost * selectedQuantity}.00
          </div>
        </div>
      </div>
    </div>
  );
}
