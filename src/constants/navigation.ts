
import {

    LayoutDashboard,

    Building2,

    Users,

    Briefcase,

    CalendarDays,

    UserCog,

    Settings,

    User,

} from "lucide-react";

import { ROUTES } from "./routes";

export const navigation = [

    {

        title:"Dashboard",

        href:ROUTES.dashboard,

        icon:LayoutDashboard,

    },

    {

        title:"Empresas",

        href:ROUTES.empresas,

        icon:Building2,

    },

    {

        title:"Clientes",

        href:ROUTES.clientes,

        icon:Users,

    },

    {

        title:"Serviços",

        href:ROUTES.servicos,

        icon:Briefcase,

    },

    {

        title:"Agendamentos",

        href:ROUTES.agendamentos,

        icon:CalendarDays,

    },

    {

        title:"Usuários",

        href:ROUTES.usuarios,

        icon:UserCog,

    },

    {

        title:"Configurações",

        href:ROUTES.configuracoes,

        icon:Settings,

    },

    {

        title:"Perfil",

        href:ROUTES.perfil,

        icon:User,

    },

];

