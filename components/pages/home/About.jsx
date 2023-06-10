import { PageContainer } from "@/components";

const About = () => {
    return(
        <PageContainer className="py-20 flex flex-col gap-10 bg-black text-white" id="about">

            <h2 className="text-secondary uppercase text-lg relative text-center md:text-2xl after:w-[50px] after:h-[3px] after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-[50%] after:-bottom-6">ABOUT T&M</h2>

            <div className="flex flex-col md:flex-row gap-10 items-center">

                <div className="h-[300px] bg-slate-200 w-[200px]">

                </div>

                <div className="flex-1 flex flex-col gap-6 md:text-lg">

                    <p>Catonsville native and Eldersburg resident, Thomas Chiofalo has both ASE and Allen Group certifications and over 30 years of experience as an auto mechanic. </p>

                    <p>TMC focuses on providing comprehensive high-quality auto maintenance and repair at a fair cost. Tommy takes the time to explain and address your vehicle’s health and keeps you informed. </p>

                    <p>TMC&apos;s goal is 100% customer satisfaction in regards to quality, time to completion and customer service. If you are looking for an honest and fair mechanic who respects your budget and desire for quality work, look to TMC for your auto repair needs.</p>
                </div>

            </div>

            <h2 className="text-secondary uppercase text-lg relative text-center md:text-2xl after:w-[50px] after:h-[3px] after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-[50%] after:-bottom-6">Certification</h2>

            <p className="text-lg md:text-xl text-center">ASE and Allen Group</p>

        </PageContainer>
    )
}

export default About;