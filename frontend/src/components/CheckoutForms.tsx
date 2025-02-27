import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const VERT_SPACING = "1";

function CustomerForm() {
  const TITLES: [string, ...string[]] = [
    "N/A",
    ...["Mrs", "Dr", "Miss", "Mx", "Ms", "Mr"],
  ];
  const CustomerSchema = z.object({
    email: z.string(),
    title: z.enum(TITLES).optional(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string().optional(),
    zipCode: z.string(),
  });

  const form = useForm<z.infer<typeof CustomerSchema>>({
    resolver: zodResolver(CustomerSchema),
  });

  function onSubmit(data: z.infer<typeof CustomerSchema>) {
    console.log("submitted", data);
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
function OrderRequestForm() {
  return <p>Order Request</p>;
}

interface Props {
  readonly currentStep: string;
  setCurrentStep: Function;
  readonly CHECKOUT_STEPS: string[];
}

export default function Checkoutforms(props: Props) {
  const { currentStep, setCurrentStep, CHECKOUT_STEPS } = props;

  return (
    <div>
      {CHECKOUT_STEPS.map((step) => {
        return (
          <Button key={step} onClick={() => setCurrentStep(step)}>
            {step}
          </Button>
        );
      })}
      {currentStep == CHECKOUT_STEPS[0] && <CustomerForm />}
      {currentStep == CHECKOUT_STEPS[1] && <OrderRequestForm />}
    </div>
  );
}
