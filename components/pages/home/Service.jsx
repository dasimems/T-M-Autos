import { BackgroundImage } from "@/assets/images";
import { PageContainer } from "../..";
import { ServiceIcon } from "@/assets/icons";
import Image from "next/image";
import { services } from "@/data/general";

const Service = () => {
  return (
    <PageContainer
      className="py-20 flex flex-col gap-10 items-center text-white"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
      id="services"
    >
      <div className="flex gap-4 items-center text-secondary uppercase text-xl md:text-3xl">
        <h2>Repairs</h2>
        <Image src={ServiceIcon} className="" alt="" />
        <h2>Services</h2>
      </div>

      <p className="md:text-lg font-medium max-w-[800px] text-center">
        T & M Auto Repair is a full service repair shop. If you don&apos;t see
        what you need below, please call and ask for Thomas Chiofalo.
      </p>

      <div className="relative after:w-[50px] after:h-[3px] after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-[70%] after:top-0 flex gap-6 md:justify-center py-10 text-lg">
        <ul className="flex flex-col gap-4 md:items-end">
          {services.slice(0, parseInt(services.length/2)).map((service, index) =>
            <li key={index}>
              {service}
            </li>
          )}
        </ul>
        <div className="w-[3px] bg-white rounded-full" />
        <ul className="flex flex-col gap-4 md:items-start">
            {services.slice(parseInt(services.length/2), ).map((service, index) =>
            <li key={index}>
              {service}
            </li>
          )}
        </ul>
      </div>

      <p className="md:text-lg max-w-[800px] font-medium text-center">
        Each job or project will be on a reservation basis, although we will
        accept a small percentage of drive-in repair work. We know that your car
        is an essential part of your life, thus repairs are made as quickly and
        as efficiently as possible.
      </p>

      <a
        href=""
        className="inline-flex px-10 py-6 border-secondary border-2 rounded-lg text-secondary md:text-lg font-bold"
      >
        Contact Us
      </a>
    </PageContainer>
  );
};

export default Service;
