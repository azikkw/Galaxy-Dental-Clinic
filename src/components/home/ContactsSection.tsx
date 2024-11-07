import React from "react";
import Link from "next/link";
import Title from "@/components/ui/Title";
import { companyInfo } from "@/data/companyInfo";

const ContactsSection = () => {
    return <section id="contacts">
        <Title title="Контакты" className="mb-6"/>
        <ul className="flex flex-col gap-2.5 mb-7 md:flex-row md:items-center md:gap-10">
            {
                companyInfo.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="flex items-center gap-2 md:flex-col md:text-center lg:flex-row lg:hover:underline">
                            <link.icon className="w-6 h-6 text-mainBlueColor"/>{link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.754456088268!2d71.424606576445!3d51.112990371726404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585abc9afedad%3A0x6040c1d01ab43064!2sGalaxy%20Dental%20Clinic!5e0!3m2!1sru!2skz!4v1730555714673!5m2!1sru!2skz"
            className="w-full h-[350px] rounded-[15px] sm:h-[400px] md:h-[450px] lg:h-[380px]" loading="lazy" title="Местоположение Galaxy Dental Clinic в г. Астана"
        />
    </section>
}
export default ContactsSection;