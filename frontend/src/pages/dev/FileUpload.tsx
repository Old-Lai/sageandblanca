import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Accessibility } from "lucide-react";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png"];

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  file: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "File is required"),
  // .refine((file) => {
  //   return !file || file.size <= MAX_UPLOAD_SIZE;
  // }, "File size must be less than 3MB")
  // .refine((file) => {
  //   return file && ACCEPTED_FILE_TYPES.includes(file.type);
  // }, "File must be an image"),
});

export default function FileUpload() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submitted");
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <div className="my-20 h-[80vh] bg-orange-400/55">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-10">
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      placeholder="shadcn"
                      {...field}
                      value={undefined}
                      onChange={(event) => {
                        field.onChange(event.target?.files);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {/* <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form> */}
    </div>
  );
}
