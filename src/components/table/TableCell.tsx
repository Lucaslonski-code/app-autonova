
interface Props{
    children:React.ReactNode;
}

export function TableCell({children}:Props){

    return(

        <td>

            {children}

        </td>

    );

}

