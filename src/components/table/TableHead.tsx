
interface Props{
    columns:string[];
}

export function TableHead({columns}:Props){

    return(

        <thead>

            <tr>

                {columns.map(column=>(

                    <th key={column}>

                        {column}

                    </th>

                ))}

            </tr>

        </thead>

    );

}

