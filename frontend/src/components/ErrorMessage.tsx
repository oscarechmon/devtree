import type { ReactNode } from "react";
import type React from "react";

type ErrorMessageProps = {
    children:ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps){
    return (
        <>
            <p className=" bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">{children}</p>               
        </>
    )
}
// const texto : React.ReactNode = "Hola Mundo"
// const texto2 : JSX.Element = <div>Hola Mundo</div> LAS DIFERENC