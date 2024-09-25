import { SiInstagram } from "@icons-pack/react-simple-icons";

export default function FooterNav(){
    return(
        <div className="flex w-full flex-col rounded-b-2xl bg-[#f6a9a0] p-5">
        <div className="mb-5 flex justify-between">
          <h2 className="text-2xl font-semibold">Useful Links</h2>
          <SiInstagram />
        </div>
        <p className="mb-2">FAQs</p>
        <p className="mb-2">Terms of Service</p>
        <p className="mb-2">Privacy Policy</p>
        <p>Flower Care</p>
        <h2 className="my-5 text-2xl font-semibold">Hours</h2>
        <p>Monday - Saturday</p>
        <p>10am - 6pm</p>
        <p className="mt-5 underline">info@sageandblanca.com</p>
        <p className="underline">(555) 555-5555</p>
        <p className="mb-10 mt-5 underline">Santa Monica, Los Angeles</p>
        <a href="https://www.flaticon.com/free-icons/spices" title="spices icons" className="text-[0.6rem]">Spices icons created by Paul J. - Flaticon</a>
      </div>
    )
}