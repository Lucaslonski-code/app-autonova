
interface Props{
    children:React.ReactNode;
}

export function TableRow({children}:Props){

    return(

        <tr>

            {children}

        </tr>

    );

}

