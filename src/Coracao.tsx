import { useState } from "react";
import "./Coracao.css"

export function Icone({im}:{im:string}){
    const [valor, setValor] = useState(0);
    function addCoracao(){
        if(valor >=5){
            setValor(0);
        }
        else{
            setValor(valor +1);
        }
    }

    return(
            <>
            <div className="coracao">
                <span className="ativo">{im.repeat(valor)}</span>
                <span className="inativo">{im.repeat(5-valor)}</span>
            </div>
            <div className="acoes">
                <button onClick={addCoracao}> + </button>
            </div>
            </>
    )
}