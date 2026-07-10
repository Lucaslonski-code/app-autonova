
interface Props{

    children:React.ReactNode;

    variant?:
    |"success"
    |"danger"
    |"warning"
    |"info"
    |"neutral";

}

export default function Badge({

    children,

    variant="neutral",

}:Props){

    return(

        <span className={`badge badge-${variant}`}>

            {children}

        </span>

    );

}