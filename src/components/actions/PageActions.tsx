
interface Props{

    children:React.ReactNode;

}

export function PageActions({

    children,

}:Props){

    return(

        <div className="page-actions">

            {children}

        </div>

    );

}

