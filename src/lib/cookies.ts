
import Cookies from "js-cookie";

const ACCESS_TOKEN="accessToken";

export const cookieService={

    getAccessToken(){

        return Cookies.get(ACCESS_TOKEN);

    },

    setAccessToken(token:string){

        Cookies.set(

            ACCESS_TOKEN,

            token,

            {

                secure:true,

                sameSite:"strict"

            }

        );

    },

    removeAccessToken(){

        Cookies.remove(ACCESS_TOKEN);

    }

};

