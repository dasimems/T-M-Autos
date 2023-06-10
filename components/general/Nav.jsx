import { navRoute } from "@/data/general"
import { PageContainer } from ".."

const Nav = () => {
    return(
        <PageContainer className="bg-primary h-[70px] flex justify-center fixed z-[999] w-screen">

            <ul className="flex items-center text-white font-medium gap-10 text-lg md:text-xl">
                {navRoute.map(({path, label},index)=>(
                    <li key={index}>
                        <a href={path}>{label}</a>
                    </li>
                ))}
            </ul>

        </PageContainer>
    )
}

export default Nav