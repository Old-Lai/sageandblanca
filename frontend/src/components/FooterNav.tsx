import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <div className="flex w-full flex-col rounded-b-2xl bg-[#f6a9a0] p-5">
      <div className="mb-5 flex justify-between">
        <h2 className="text-2xl font-semibold">Useful Links</h2>
        <SiInstagram />
      </div>
      <Link to="faq" className="mb-2">
        FAQs
      </Link>
      <Link to="terms-of-services" className="mb-2">
        Terms of Service
      </Link>
      <Link to="privacy-policy" className="mb-2">Privacy Policy</Link>
      <Link to="flower-care">Flower Care</Link>
      <h2 className="my-5 text-2xl font-semibold">Hours</h2>
      <p>Monday - Saturday</p>
      <p>10am - 6pm</p>
      <p className="mt-5 underline">info@sageandblanca.com</p>
      <p className="underline">(562) 888-3133</p>
      <p className="mb-10 mt-5 underline">Santa Monica, Los Angeles</p>
    </div>
  );
}
