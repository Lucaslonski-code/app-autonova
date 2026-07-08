
import api from "@/services/api";

export default async function Home(){

    console.log(api.defaults.baseURL);

    return(

        <div>

            API configurada.

        </div>

    );

}
