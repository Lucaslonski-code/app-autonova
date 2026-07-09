
interface Props{
    children:React.ReactNode;
}

export function DataTable({children}:Props){

    return(

        <div className="table-wrapper">

            <table className="table">

                {children}

            </table>

        </div>

    );

}

