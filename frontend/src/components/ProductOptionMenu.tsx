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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SizeOption } from "@/lib/interfaces";
import { useState } from "react";

export default function ProductOptionMenu(
  props: Readonly<{
    className?: string;
    additional_options?: string[];
    size_options: SizeOption[];
    submitOrder: Function;
  }>,
) {
  const { className, additional_options, size_options, submitOrder } = props;
  const [estimatedCost, setEstimatedCost] = useState(size_options[0].dollar);

  type Size_options = (typeof size_options)[number]["value"];
  const SIZE_VALUES: [Size_options, ...Size_options[]] = [
    `${size_options[0].value}_${0}`,
    ...size_options.slice(1).map((size, index) => `${size.value}_${index + 1}`),
  ];
  const OrderSchema = z
    .object({
      size: z.enum(SIZE_VALUES, {
        required_error: "Please select a size.",
      }),
      colorTone: z.string().optional(),
      includeVase: z
        .enum(["Yes", "No"], { required_error: "Please select an option" })
        .optional(),
      premiumPackaging: z
        .enum(["Yes", "No"], { required_error: "Please select an option" })
        .optional(),
      specificRequest: z.string().optional(),
      allergies: z.string(),
      allergiesText: z.string().optional(),
      deliveryTime: z.string(),
    })
    .refine(
      (data) => {
        const allergiesResponse = data.allergies;
        const allergyTextResponse = data.allergiesText;
        if (
          allergiesResponse == "Yes" &&
          allergyTextResponse?.toString().trim() != ""
        )
          return true;
        else if (allergiesResponse == "No") return true;
        else return false;
      },
      {
        message: "Please specify your allergies",
        path: ["allergiesText"],
      },
    );

  const form = useForm<z.infer<typeof OrderSchema>>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      size: `${size_options[0].value}_0`,
      colorTone: "",
      includeVase: "No",
      premiumPackaging: "No",
      specificRequest: "",
      allergiesText: "",
      deliveryTime: "",
    },
  });

  function updateEstimatedCost() {
    const size = form.getValues().size.split("_")[1];
    const baseCost = size_options[Number(size)].dollar;
    const vaseCost = form.getValues().includeVase == "Yes" ? 8 : 0;
    setEstimatedCost(baseCost + vaseCost);
  }

  function onSubmit(values: z.infer<typeof OrderSchema>) {
    const orderDetails = {
      ...values,
      estimatedCost: estimatedCost,
      size: values.size.split("_")[0],
      includeVase: values.includeVase == "Yes",
      premiumPackaging: values.premiumPackaging == "Yes",
    };
    submitOrder(orderDetails);
  }

  return (
    <div className={cn(className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <Select
                  onValueChange={(e) => {
                    field.onChange(e);
                    updateEstimatedCost();
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {size_options.map((size, index) => {
                      return (
                        <SelectItem
                          value={`${size.value}_${index}`}
                          key={size.value}
                        >{`${size.value.charAt(0).toUpperCase() + size.value.slice(1)}  +$${size.dollar - size_options[0].dollar}`}</SelectItem>
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
            name="colorTone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color Tone</FormLabel>
                <FormControl>
                  <Input placeholder="Optional..." {...field} />
                </FormControl>
                <FormDescription>The overall color theme</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {additional_options?.map((option) => {
            //only appears if options are set for product
            if (option == "vase")
              return (
                <FormField
                  key={option}
                  control={form.control}
                  name="includeVase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Include vase</FormLabel>
                      <Select
                        onValueChange={(e) => {
                          field.onChange(e);
                          updateEstimatedCost();
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes +$8</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            else if (option == "premium packaging")
              return (
                <FormField
                  key={option}
                  control={form.control}
                  name="premiumPackaging"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Premium Packaging</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
          })}

          <FormField
            control={form.control}
            name="specificRequest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Requests</FormLabel>
                <FormControl>
                  <Textarea rows={10} placeholder="Optional..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="allergies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Allergies</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="allergiesText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>If Yes, Allergies Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Let us know what not to use"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deliveryTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prefered Delivery Date</FormLabel>
                <FormControl>
                  <Input placeholder="Optional..." {...field} />
                </FormControl>
                <FormDescription>The overall color theme</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <p>{`Estimated total $${estimatedCost}`}</p>
          <Button type="submit" className="h-16 w-full">
            Add to cart
          </Button>
        </form>
      </Form>
    </div>
  );
}
