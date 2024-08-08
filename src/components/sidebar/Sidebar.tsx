import { IoAddCircle, IoBrowsersOutline, IoCalculator, IoFootball, IoHeart, IoLogoReact } from "react-icons/io5";
import Image from "next/image"
import { SidebarMenuItem } from "./SidebarMenuItem";
import { Filter } from "../filter";

const menuItems = [
    {
        path: '/dashboard/home',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subtite: 'visualizacion'
    },
    {
        path: '/dashboard/categories',
        icon: <IoCalculator size={40} />,
        title: 'Categories',
        subtite: 'Categorias'
    },
   
]

export const Sidebar = () => {
  return (
    <div id="menu"
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 hidden custom-sm:block"
            style={{ width: '400px' }}
        >
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white flex">
                    <IoLogoReact className="mr-2" />
                    <span>RECIPES</span>
                    <span className="text-blue-500"><small>NEXTJS</small></span>.
                </h1>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>

                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt={'profile-image'}
                            width={50}
                            height={50} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jhonatan Zuniga
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {menuItems.map((item, index) => {
                    return (
                        <SidebarMenuItem
                            key={index + item.title}
                            title={item.title}
                            subtitle={item.subtite}
                            icon={item.icon}
                            path={item.path}
                        />
                    )
                })}
                <Filter/>
            </div>
        </div>
  )
}

