import { PageContainer } from "@/components"
import { galleryImages } from "@/data/general"
import Image from "next/image"

const HistoricalCars = () => {
    return(
        <PageContainer className="py-20 flex flex-col items-center gap-10" id="historical-cars">

            <h2 className="text-secondary uppercase text-lg relative text-center md:text-2xl after:w-[50px] after:h-[3px] after:bg-slate-700 after:rounded-full after:absolute after:left-1/2 after:-translate-x-[50%] after:-bottom-6">SHOW + HISTORIC Cars</h2>

            <p className="text-slate-700 md:text-lg max-w-[800px] text-center">In addition to providing general repairs and services for a range of vehicles, Thomas Chiofalo is trusted with maintaining and repairing Historic Cars. See a few of his recent projects below.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {galleryImages.map((images, index)=>(
                    <div className="relative h-[200px] sm:h-[220px] md:h-[250px]" key={index}>

                        <Image src={images} alt="" />

                    </div>
                ))}
            </div>

        </PageContainer>
    )
}

export default HistoricalCars