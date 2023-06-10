"use client";

import { navRoute } from "@/data/general"
import { PageContainer } from ".."

const Nav = () => {
    return(
        <PageContainer className="bg-primary h-[70px] flex justify-center fixed z-[999] w-screen">

            <ul className="flex items-center text-white font-medium gap-10 text-lg md:text-xl">
                {navRoute.map(({path, label, Icon},index)=>(
                    <li key={index}>
                        <a href={path}>
                            {Icon !== "" && <span className="md:hidden"><Icon set="bold" /></span>}
                            <span className="hidden md:inline-block">{label}</span>
                            
                            
                        </a>
                    </li>
                ))}
            </ul>

        </PageContainer>
    )
}

export default Nav