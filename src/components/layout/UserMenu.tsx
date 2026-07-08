
import { CircleUserRound } from "lucide-react";

export function UserMenu() {
    return (
        <button
            className="
            flex
            items-center
            gap-3
            px-4
            py-2
            rounded-xl
            hover:bg-surface
            transition-all
        "
        >
            <CircleUserRound />

            <div className="text-left">
                <p>Lucas</p>
                <small className="text-muted">
                    Administrador
                </small>
            </div>
        </button>
    );
}

