
import type { ReactNode } from "react";

import { Sidebar } from "./Sidebar";

import { Topbar } from "./Topbar";

interface Props{

    children:ReactNode;

}

export function MainLayout({

    children,

}:Props){

    return(

        <div className="layout">

            <Sidebar/>

            <main className="content">

                <Topbar/>

                {children}

            </main>

        </div>

    );

}

