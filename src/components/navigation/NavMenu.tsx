
import { navigation } from "@/constants/navigation";

import { NavItem } from "./NavItem";

export function NavMenu(){

    return(

        <>

            {

                navigation.map(item=>(

                    <NavItem

                        key={item.href}

                        href={item.href}

                        label={item.title}

                        icon={item.icon}

                    />

                ))

            }

        </>

    );

}

