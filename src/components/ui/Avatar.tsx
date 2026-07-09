
interface Props{

    name?:string;

}

export function Avatar({

    name="Administrador",

}:Props){

    return(

        <div className="avatar">

            {name.charAt(0).toUpperCase()}

        </div>

    );

}

