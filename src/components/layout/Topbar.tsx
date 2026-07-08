
import { Search } from "lucide-react";
import { UserMenu } from "./UserMenu";

export function Topbar() {
    return (
        <header
            className="
            h-20
            border-b
            border-border
            flex
            items-center
            justify-between
            px-8
        "
        >
            <div
                className="
                flex
                items-center
                gap-3
                bg-surface
                rounded-xl
                px-4
                py-3
                w-96
            "
            >
                <Search size={18} />

                <input
                    placeholder="Pesquisar..."
                    className="
                    bg-transparent
                    outline-none
                    flex-1
                "
                />
            </div>

            <UserMenu />
        </header>
    );
}

