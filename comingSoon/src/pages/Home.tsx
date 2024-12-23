import background from "@/assets/background.jpeg";
import { SiInstagram } from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div>
      <div className="absolute left-0 top-0 -z-10 h-[100vh] w-[100vw]">
        <img
          src={background}
          className="h-[100vh] object-cover blur-lg md:w-[100vw]"
          alt="temporary background"
        />
      </div>
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center text-5xl text-white">
        <div className="mb-5 text-center font-light">
          <h1>Under</h1>
          <h1>Construction</h1>
        </div>
        <div>
          <a
            href="https://www.instagram.com/sageandblanca/"
            className="flex items-center justify-center"
          >
            <p className="mr-2 text-sm">Sage & Blanca:</p>
            <SiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
