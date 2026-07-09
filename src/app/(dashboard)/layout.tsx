
import type { ReactNode } from "react";

import { MainLayout } from "@/components/layout/MainLayout";

interface Props{

    children:ReactNode;

}

export default function DashboardLayout({

    children,

}:Props){

    return(

        <MainLayout>

            {children}

        </MainLayout>

    );

}
