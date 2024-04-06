import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
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
