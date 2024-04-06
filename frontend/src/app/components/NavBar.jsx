import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const linkCSS = "flex flex-col items-center hover:fill-white hover:text-white";

    return (
        <div className="w-full h-[60px] bg-opacity-100 sticky top-0">
            <div className="h-full flex justify-center items-center">
                <Image className="flex justify-start items-center absolute top-4 left-4"/>
                <ul className="flex flex-row gap-20">
                    <li className="flex items-center">
                        <Link href="/" className={linkCSS}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={linkCSS}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={linkCSS}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/findaspot" className={linkCSS}>
                            Find a Spot
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className={linkCSS}>
                            Pricing
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}