import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "./functions/cart";

const VERT_SPACING = "1";

interface CustomerInfo {
  email: string;
  title?: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  zipCode: string;
}

interface CustomerFormProps {
  customerDetails: CustomerInfo;
  setCustomerDetails: Function;
  setCurrentStep: Function;
}

function CustomerForm(props: Readonly<CustomerFormProps>) {
  const { customerDetails, setCustomerDetails, setCurrentStep } = props;

  const TITLES: [string, ...string[]] = [
    "N/A",
    ...["Mrs", "Dr", "Miss", "Mx", "Ms", "Mr"],
  ];
  const CustomerSchema = z.object({
    email: z
      .string()
      .refine(
        (value) =>
          /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(value ?? ""),
        "Please input a valid email",
      ),
    title: z.enum(TITLES).optional(),
    firstName: z.string().min(2, "Name should have atleast 2 characters"),
    lastName: z.string().min(2, "Name should have atleast 2 characters"),
    phone: z.string().optional(),
    zipCode: z
      .string()
      .refine(
        (value) => /^\d{5}(?:[-\s]\d{4})?$/.test(value ?? ""),
        "Please input a valid ZIP code",
      ),
  });

  const form = useForm<z.infer<typeof CustomerSchema>>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      email: customerDetails.email,
      title: customerDetails.title,
      firstName: customerDetails.firstName,
      lastName: customerDetails.lastName,
      phone: customerDetails.phoneNumber,
      zipCode: customerDetails.zipCode,
    },
  });

  function onSubmit(data: z.infer<typeof CustomerSchema>) {
    console.log("submitted", data);
    setCustomerDetails({
      email: data.email,
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phone,
      zipCode: data.zipCode,
    });
    setCurrentStep("Order Request");
  }

  return (
    <div className="p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={`py-${VERT_SPACING}`}>
                <FormControl>
                  <Input placeholder="Email adress*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={`flex gap-10 py-${VERT_SPACING}`}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Select
                    onValueChange={(e) => {
                      field.onChange(e);
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Title" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TITLES.map((title) => {
                        return (
                          <SelectItem value={title} key={title}>
                            {title == "N/A" ? "" : title}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First name*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className={`py-${VERT_SPACING}`}>
                <FormControl>
                  <Input placeholder="Last name*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className={`py-${VERT_SPACING}`}>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className={`py-${VERT_SPACING}`}>
                <FormControl>
                  <Input placeholder="Zip code*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>* Required fields</FormDescription>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

interface OrderRequestFormProps {
  customerDetails: CustomerInfo;
  setCurrentStep: Function;
}

function OrderRequestForm(props: Readonly<OrderRequestFormProps>) {
  const { customerDetails, setCurrentStep } = props;

  const navigate = useNavigate();
  const updateItems = useCartStore((state) => state.update);

  function submitRequest() {
    toast("Order Request Status", {
      description: `Sucessfully requested ${JSON.stringify(customerDetails)}`,
    });
    window.localStorage.removeItem("cart");
    updateItems();
    navigate("/");
  }
  return (
    <div>
      <div className="text flex h-28 items-center justify-between bg-slate-200 px-5 font-semibold">
        <div className="flex flex-col">
          <p>{`Email: ${customerDetails.email}`}</p>
          <p>{`First: ${customerDetails.firstName}`}</p>
          <p>{`Last: ${customerDetails.lastName}`}</p>
          <p>{`ZIP: ${customerDetails.zipCode}`}</p>
        </div>
        <div className="">
          <button onClick={() => setCurrentStep("Customer")}>edit</button>
        </div>
      </div>
      <p>
        Please Note that this is not a confirmation of order, order confirmation
        will be sent through email once we decided to proceed with this order
      </p>
      <Button onClick={() => submitRequest()}>Submit Request</Button>
    </div>
  );
}

interface Props {
  readonly currentStep: string;
  setCurrentStep: Function;
  readonly CHECKOUT_STEPS: string[];
}

export default function Checkoutforms(props: Props) {
  const { currentStep, setCurrentStep, CHECKOUT_STEPS } = props;
  const [customerDetails, setCustomerDetails] = useState<CustomerInfo>({
    email: "",
    firstName: "",
    lastName: "",
    zipCode: "",
  });

  return (
    <div>
      {CHECKOUT_STEPS.map((step) => {
        return (
          <Button key={step} onClick={() => setCurrentStep(step)}>
            {step}
          </Button>
        );
      })}
      {currentStep == CHECKOUT_STEPS[0] && (
        <CustomerForm
          customerDetails={customerDetails}
          setCustomerDetails={setCustomerDetails}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep == CHECKOUT_STEPS[1] && (
        <OrderRequestForm
          customerDetails={customerDetails}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
}
