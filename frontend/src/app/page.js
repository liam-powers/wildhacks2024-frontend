import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

const cities = [
  "San Francisco",
  "Chicago",
  "New York City",
  "Evanston",
  "Boston",
  "Atlanta",
  "Houston",
  "Los Angeles",
];
export default function Home() {
  return (
    <div className="bg-[#000130] w-screen h-screen bg-[url('/homeBackground.webp')] bg-blend-overlay bg-opacity-50 bg-no-repeat">
        <div className="w-[1024px]">
          <NavBar />
  
          <div className="flex flex-col gap-40 justify-center align-center items-center pt-8">
            <div className="text-[90px]">Parking Re-Imagined</div>
            <div className="flex flex-row gap-[60px]">
              <Link href="./about">
                <Button text="How it Works" />
              </Link>
              <Link href="./findaspot">
                <Button text="Try it Here" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pl-[1024px] mx-auto mt-auto">
          <div className="text-white mb-2 text-[90px] pb-8"> Our Cities </div>
          <div>
            <div className="flex flex-col justify-center align-center">
              {cities.map((city) => (
                <div className="flex flex-col items-center gap-4">
                  <div className="text-2xl">{city}</div>
                  <Image src="/redstar.png" width={20} height={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
