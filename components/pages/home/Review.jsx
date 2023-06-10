import { BannerBackground } from "@/assets/images";
import { PageContainer } from "@/components";
import ReviewCard from "@/components/general/ReviewCard";
import { reviewsList } from "@/data/general";
import Image from "next/image";

const Review = () => {
    return(
        <PageContainer className="py-20 relative flex flex-col items-center gap-6">

            <Image src={BannerBackground} fill className="object-cover bg-fixed" alt="banner" />
            
            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(255,255,255,.7)]"></div>

            

            <h2 className="text-secondary uppercase text-lg relative text-center md:text-2xl">HEAR FROM OUR CUSTOMERS</h2>

            {reviewsList.map((data, index)=>(
                <ReviewCard {...data} key={index} />
            ))}

        </PageContainer>
    )
}

export default Review;