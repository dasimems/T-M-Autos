"use client";
import { GalleryImageFive, GalleryImageFour, GalleryImageOne, GalleryImageSix, GalleryImageThree, GalleryImageTwo } from "@/assets/images";
import { Home, People, Work } from "react-iconly";
import {FaCar} from "react-icons/fa"

export const Routes = {
    Home: {
        path: "#",
        label: "Home",
        showIn: ["nav"],
        Icon: Home
    },

     Services: {
        path: "#services",
        label: "Services",
        showIn: ["nav"],
        Icon: Work
    },
    HistoricalCars: {
        path: "#historical-cars",
        label: "Historical Cars",
        showIn: ["nav"],
        Icon: FaCar
    },
    About: {
        path: "#about",
        label: "About",
        showIn: ["nav"],
        Icon: People
    }

},
allRoute = Object.keys(Routes).map(key => Routes[key]),
navRoute = Object.keys(Routes).map(key => Routes[key]).filter(route => route.showIn.includes("nav")),
services = [
    "Emissions Systems Repair",
    "Factory Scheduled Maintenance",
    "Brake Service + Repair",
    "Transmission Service + Repair",
    "Heater Service | A/C Service",
    "Oil Change with Lube + Filter",
    "Tune Up",
    "Radiator Flush + Service",
    "Transmission Repair and Rebuild",
    "Steering + Suspension Repair",
    "Engine Performance +  Diagnostics",
    "Engine Repair and Replacement"
],
galleryImages = [
    GalleryImageOne,
    GalleryImageTwo,
    GalleryImageThree,
    GalleryImageFour,
    GalleryImageFive,
    GalleryImageSix,
],
reviewsList = [
    {
        review: "I am so happy to have an honest and reliable mechanic to work on my cars. Tommy informs me of needed repairs and the costs upfront and he does excellent work for reasonable prices in a timely fashion. I travel 30 minutes to go to T&M Auto because I know I can trust the work to be the best! I would highly recommend T&M Auto Repair!",
        name: "Janice"
    },
    
    {
        review: "I take all of my vehicles to Tom at TMC for maintenance and repairs. I can always count on TMC for accurate diagnosis, fair pricing and they don't try to gouge me on unnecessary repairs and extras. I highly recommend TMC Auto Repair!",
        name: "Kevin, Owner of CLIMATE PRO MECHANICAL"
    },

    {
        review: "You have always given us such exceptional service when we have our vehicles serviced and now my entire family sends their vehicles to TMC.  Thank you for being so trustworthy, we know we can always count on you to do the best work at a very reasonable price. ",
        name: "Donna"
    },
    {
        review: "My family has been taking our vehicles to TMC for years!  We live over 25 miles away but wouldn’t trust our cars to anyone else.  Tom truly cares about his customers.  He takes the time to explain exactly what you need done and why.  He’ll even will show you the old parts!  Tom takes such pride and passion in his work and it shows in the end results.  He believes in doing the right thing, NOT just what will make him the most profit.  Tom’s an expert in his field but his costs are very fair and reasonable.  It’s such a relief having someone who you know will watch out for your best interests.  We are a TMC customer for life! ",
        name: "Anne"
    }
]