
import { ReactNode } from "react";

interface TableProps {

    children: ReactNode;

}

export function Table({

    children,

}: TableProps) {

    return (

        <div className="table-wrapper">

            <table className="table">

                {children}

            </table>

        </div>

    );

}

