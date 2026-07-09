
import Cookies from "js-cookie";

import { api } from "./api";

api.interceptors.request.use(config=>{

    const token=Cookies.get("token");

    if(token){

        config.headers.Authorization=`Bearer ${token}`;

    }

    return config;

});

