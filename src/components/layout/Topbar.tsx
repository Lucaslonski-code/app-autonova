
import { Bell } from "lucide-react";

import { Avatar } from "@/components/ui/Avatar";
import { Breadcrumb } from "@/components/layout/Breadcrump";

export function Topbar() {

  return (

    <header className="topbar">

      <div>

        <Breadcrumb />

      </div>

      <div className="topbar-actions">

        <button className="icon-button">

          <Bell size={20} />

        </button>

        <Avatar />

      </div>

    </header>

  );

}

