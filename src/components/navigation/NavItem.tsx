
import Link from "next/link";

import type { LucideIcon } from "lucide-react";

interface Props{

    href:string;

    label:string;

    icon:LucideIcon;

}

export function NavItem({

    href,

    label,

    icon:Icon,

}:Props){

    return(

        <Link href={href}>

            <div className="sidebar-item">

                <Icon size={18}/>

                <span>{label}</span>

            </div>

        </Link>

    );

}

