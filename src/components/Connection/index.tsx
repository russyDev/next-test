import Image from 'next/image';
import connectionsImg from '@/assets/img/connections.png';

export const Connection = () => {
    return <section className="px-5 pt-23 pb-[78px] bg-primary-dark md:pb-[67px] md:pt-28">
        <div className="m-auto md:max-w-[1120px] lg:max-w-[1170px] text-center">
            <h2 className="text-white font-semibold text-xl mb-6 md:mb-5">Active Integration</h2>
            <h3 className="text-white text-5xl font-bold capitalize leading-[56px] mb-5 md:mb-5 lg:text-5xl ">Connect
                And Synchronize Easily</h3>
            <p className="text-white inline-block text-xl font-normal font-['Roboto'] leading-7 px-5 mb-5 md:block md:max-w-[616px] md:m-auto md:mb-5">
                Automatically integrates with all your software.
            </p>
            <Image src={connectionsImg} alt="connections" className="mx-auto"/>
        </div>
    </section>
}