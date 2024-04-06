import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-[#000130] w-screen h-screen">
      <NavBar/>
      <div className="justify-center">
        Parking Re-Imagined
        <Link href="./about">
          <Button text="How it Works" />
          <Button text="Try it Here" />
        </Link>
      </div>
      <div>
        <div>
          Our Cities
        </div>
        <div>
          San Francisco
          Chicago
          New York City
          Evanston
          Boston
          Atlanta
          Houston
          Las Angeles
        </div>

      </div>
    </div>
  );
}
