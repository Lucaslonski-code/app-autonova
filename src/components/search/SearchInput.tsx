
import { Search } from "lucide-react";

interface Props{

    value:string;

    onChange:(value:string)=>void;

}

export function SearchInput({

    value,

    onChange,

}:Props){

    return(

        <div className="search-input">

            <Search size={18}/>

            <input

                value={value}

                placeholder="Pesquisar..."

                onChange={e=>onChange(e.target.value)}

            />

        </div>

    );

}

