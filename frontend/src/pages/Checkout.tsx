import { Link } from "react-router-dom";
import { useCartStore } from "@/components/functions/cart";
import ItemList from "@/components/ItemList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Checkoutforms from "@/components/CheckoutForms";

const CHECKOUT_STEPS = ["Customer", "Order Request"];

export default function Checkout() {
  const cartItems = useCartStore((state) => state.items);
  const [currentStep, setCurrentStep] = useState<string>(CHECKOUT_STEPS[0]);
  return (
    <div>
      <div className="flex h-16 items-center bg-red-300 pl-5">
        <button className="z-10 text-center text-2xl font-semibold">
          <Link to="/">SAGE & BLANCA</Link>
        </button>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="min-h-16 px-5">
          <AccordionTrigger className="text-xl font-normal">
            Order Summary
          </AccordionTrigger>
          <AccordionContent>
            <Separator decorative />
            <div className="h-80">
              <ItemList cartItems={cartItems} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="px-5 pt-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage
                className={`${currentStep == CHECKOUT_STEPS[0] && "font-bold"}`}
              >
                Customer
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage
                className={`${currentStep == CHECKOUT_STEPS[1] && "font-bold"}`}
              >
                Order Request
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Checkoutforms
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        CHECKOUT_STEPS={CHECKOUT_STEPS}
      />
    </div>
  );
}
