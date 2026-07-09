
"use client";

import { usePathname } from "next/navigation";

export function Breadcrumb(){

    const pathname=usePathname();

    const page=pathname.split("/").pop() || "dashboard";

    return(

        <span className="text-secondary">

            {page.charAt(0).toUpperCase()+page.slice(1)}

        </span>

    );

}

