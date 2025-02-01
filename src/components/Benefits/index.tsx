import Image from "next/image";
import simplifyIcon from "@/assets/icons/simplify.svg";
import connectionsIcon from "@/assets/icons/connections.svg";
import efficiencyIcon from "@/assets/icons/efficiency.svg";

export const Benefits = () => {

    return <section className="max-w-[392px] px-5 pt-25 pb-[78px] m-auto md:max-w-[1140px] ">
        <h3 className="text-primary font-semibold text-xl mb-5">What benefits does Mango provide?</h3>
        <h3 className="text-black text-[35px] font-bold capitalize leading-10 mb-5">Why Mango?</h3>
        <p className="text-black text-xl font-normal font-['Roboto'] leading-7 mb-5">
            Make management a breeze with a one-stop-shop for your whole practice.
        </p>

        <div className="flex flex-col gap-10 md:flex-row">
            <div>
                <Image src={simplifyIcon} alt="simplyfile-icon" className="mb-4"/>
                <h4 className="text-black text-xl font-bold font-['Inter'] capitalize leading-7 mb-2">
                    Simplify all your operations
                </h4>
                <p className="text-black text-base font-normal font-['Roboto'] leading-normal">
                    Centralize every aspect of your accounting practice. Cut down on complexity and let your team focus on what truly matters.
                </p>
            </div>

            <div>
                <Image src={connectionsIcon} alt="connections-icon" className="mb-4"/>
                <h4 className="text-black text-xl font-bold font-['Inter'] capitalize leading-7 mb-2">
                    Create stronger client connections
                </h4>
                <p className="text-black text-base font-normal font-['Roboto'] leading-normal">
                    Provide clients with a seamless experience using an integrated portal for document sharing, scheduling, and eSignatures.
                </p>
            </div>

            <div>
                <Image src={efficiencyIcon} alt="efficiency-icon" className="mb-4"/>
                <h4 className="text-black text-xl font-bold font-['Inter'] capitalize leading-7 mb-2">
                    Boost Efficiency And Profitability
                </h4>
                <p className="text-black text-base font-normal font-['Roboto'] leading-normal">
                    Make data-driven decisions with real-time insights, dynamic reporting, and tools designed to improve productivity.
                </p>
            </div>
        </div>
    </section>
}