import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface Item {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface Props {
  readonly item: Item;
}

const TEMP_SELECTION = Array.from({ length: 10 });

export default function CartItem(props: Props) {
  const { item } = props;
  return (
    <div>
      <div className="my-5 h-20">
        <div className="flex h-[55%] items-center">
          <div className="w-[80%] pr-3 font-semibold">{item.name}</div>
          <div className="w-[20%]">
            <Select defaultValue={`${item.quantity}`}>
              <SelectTrigger className="h-8 w-full rounded-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TEMP_SELECTION.map((_, i) => (
                    <SelectItem
                      key={`${item.id}-${i}`}
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
          <div className="w-[80%]"></div>
          <div className="right-0 w-[20%] text-right">{item.price}.00</div>
        </div>
      </div>
      <Separator decorative className="my-1" />
    </div>
  );
}
