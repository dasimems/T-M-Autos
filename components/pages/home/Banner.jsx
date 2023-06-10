import { BannerBackground } from "@/assets/images"
import { PageContainer } from "@/components"
import Image from "next/image"

const HomeBanner = () => {
    return(
        <PageContainer className="min-h-screen relative flex items-center justify-center py-[100px] md:py-[80px]">

            <Image src={BannerBackground} fill className="object-cover bg-fixed" alt="banner" />
            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(255,255,255,.6)]">

            </div>

            <div className="flex flex-col gap-6 relative z-10 text-center max-w-[800px]">
                <p className="text-lg md:text-2xl text-slate-800">At T & M Autos, We Perform basic care and maintenance, including changing oil, checking fluid levels, and rotating tires. Repair or replace worn parts, such as brake pads, wheel bearings, and sensors. Perform repairs to manufacturer and customer specifications. Explain automotive problems and repairs to clients.</p>

                <h2 className="font-medium text-lg md:text-xl">With over 20+ years of experience, we specialize in repairing & rebuilding transmissions for most makes and models.</h2>

                <h1 className="font-medium text-xl md:text-3xl text-secondary uppercase">Ask About our free Estimates</h1>
            </div>

        </PageContainer>
    )
}

export default HomeBanner