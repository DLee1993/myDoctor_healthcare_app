import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import { Logo } from "@/components/Logo";
import Copy from "@/public/assets/icons/copy.svg";
import Link from "next/link";

export default function Home() {
    return (
        <section id="flex-container" className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Logo />
                    <PatientForm />
                    <div className="flex justify-between mt-20">
                        <figure className="flex justify-center items-center gap-2 text-14-regular text-dark-600">
                            <Image src={Copy} alt="copyright icon" width={17} className="opacity-45"/>
                            <figcaption>2024 MyDoctor</figcaption>
                        </figure>
                        <Link href="/?admin=true" className="text-green-500 underline">Admin</Link>
                    </div>
                </div>
            </section>
        </section>
    );
}
