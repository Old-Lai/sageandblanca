import { useState } from "react";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Value } from "@radix-ui/react-select";

const formSchema = z
  .object({
    size: z.enum(["Small", "Medium", "Large", ""], {
      required_error: "Please select a size.",
    }),
    colorTone: z.string().optional(),
    includeVase: z.string(),
    specificRequest: z.string().optional(),
    allergies: z.string().optional(),
    allergiesText: z.string().optional(),
    deliveryTime: z.string(),
  })
  .refine((data) => {
    const allergiesResponse = data.allergies;
    if (allergiesResponse == "Yes" && data.allergiesText) return true;
    else if (data.allergies == "No") return true;
    else return false;
  }, {
    message: "Please specify your allergies",
    path: ['allergiesText']
  });

export default function ProductOptionMenu(props: Readonly<{ className?: string }>) {
  const { className } = props;
  const [haveAllergies, setHaveAllergies] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      colorTone: "",
      specificRequest: "",
      allergiesText: "",
      deliveryTime: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Small">Small</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Large">Large</SelectItem>
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
          <FormField
            control={form.control}
            name="includeVase"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Include vase</FormLabel>
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
          {haveAllergies && (
            <FormField
              control={form.control}
              name="allergiesText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allergies Description</FormLabel>
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
          )}
          <FormField
            control={form.control}
            name="deliveryTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Time</FormLabel>
                <FormControl>
                  <Input placeholder="Optional..." {...field} />
                </FormControl>
                <FormDescription>The overall color theme</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
