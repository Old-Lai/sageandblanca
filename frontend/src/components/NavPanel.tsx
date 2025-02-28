import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function NavPanel() {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-16" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>Menu</SheetTitle>
        <SheetClose asChild>
          <button
            className="h-14 w-full text-left"
            onClick={() => navigate("/")}
          >
            - Home
          </button>
        </SheetClose>
        <SheetClose asChild>
          <button
            className="h-14 w-full text-left"
            onClick={() => navigate("/order")}
          >
            - Order
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
