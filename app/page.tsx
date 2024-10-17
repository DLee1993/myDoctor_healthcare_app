import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import { Logo } from "@/components/Logo";
import Copy from "@/public/assets/icons/copy.svg";
import OnboardingImage from "@/public/assets/images/onboarding-img.png";
import Link from "next/link";

export default function Home() {
    return (
        <section id="flex-container" className="flex h-screen max-h-screen">
            {/* TODO: OTP Verification section */}
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Logo />
                    <PatientForm />
                    <div className="flex justify-between pt-20 pb-10">
                        <figure className="flex justify-center items-center gap-2 text-14-regular text-dark-600">
                            <Image
                                src={Copy}
                                alt="copyright icon"
                                width={17}
                                className="opacity-45"
                            />
                            <figcaption>2024 MyDoctor</figcaption>
                        </figure>
                        <Link href="/?admin=true" className="text-green-500 underline">
                            Admin
                        </Link>
                    </div>
                </div>
            </section>
            <Image
                src={OnboardingImage}
                alt="onboarding"
                width={2000}
                height={2000}
                className="w-full lg:max-w-[55%] xl:max-w-[50%] fixed top-0 left-0 -z-10 opacity-20 lg:relative"
            />
        </section>
    );
}
