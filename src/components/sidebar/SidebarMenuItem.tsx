'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import style from './style.module.css'
import Link from 'next/link';
interface Props{
    path:string;
    icon: JSX.Element;
    title:string;
    subtitle:string;
}
export const SidebarMenuItem = ({path,icon,title,subtitle}:Props) => {
    const myPath= usePathname();
    return (
        <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800  hover:bg-white/5 transition ease-linear duration-150 ${myPath=== path ?'bg-blue-600':'bg-slate-700'}`}>
            <div>
              {icon}
            </div>
            <div className="flex flex-col">
                <span className={`text-lg font-bold leading-5 text-white ${(myPath=== path) && style['active-link']}`}>{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
            </div>
        </Link>
    )
}

