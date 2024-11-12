import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export function NavBar() {
    return (
        <header>
            <nav>
                <Link className="mr-auto" href="/dashboard">
                <BrandLogo />
                </Link>
            </nav>
        </header>
    )
}