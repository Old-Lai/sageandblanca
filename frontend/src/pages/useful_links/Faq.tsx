import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="mx-5 my-20 flex min-h-[70vh] items-center justify-center">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Shipping Policy</AccordionTrigger>
          <AccordionContent>
            <p>
              Minimum three business day is required to process orders for our
              flower products. Simply indicate the date of delivery when you
              place your order. We deliver in Los Angeles from 10 AM to 6 PM
              daily. Shipping costs are calculated based on the shipping
              address. Once your order has been placed you will receive a
              confirmation email with the details of your order, total cost and
              payment details. Payment should be completed at least 1 day before
              delivery.
            </p>
            <p className="mt-5">Remarks:</p>
            <p>Delivery is free up to 10 miles (from Santa Monica).</p>
            <p>Delivery for distance from 10 to 15 miles is $10.</p>
            <p>Delivery for distance from 15 to 25 miles is $1.5 per mile.</p>
            <p>Delivery for distance from 25 and more miles is $2 per mile.</p>
            <p className="mt-5">
              If an urgent delivery is required, we will do our best to
              accommodate your request at additional charges.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Specific Delivery Times</AccordionTrigger>
          <AccordionContent>
            Because of multiple variables, including the traffic in Los Angeles,
            we are unable to guarantee deliveries at a specific time. However,
            you can request a delivery time frame by filling in the special
            instruction box when completing your order, and we will do our best
            to deliver within your preferred time frame.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent>
            All sales are final. We provide a service consisting of perishable
            products that are sensitive to temperature, moisture and light.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Custom Messages</AccordionTrigger>
          <AccordionContent>
            Customers may wish to include a message with their compositions and
            these messages will also be private and confidential between the
            customer and the recipient.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>If the recipient is not at home</AccordionTrigger>
          <AccordionContent>
            In the case that the recipient is not at home at the time of
            delivery, we will contact you by phone, unless you have provided us
            with special instructions on the order form. We can leave the
            flowers in a safe place like a porch or neighbor's, or we can leave
            a message to call to arrange a next day delivery at additional
            charges.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
