
import "./Coracao.css"

type AtributoProps = {
    icone:string;
    valor:number;
}

export function Icone({icone, valor}:AtributoProps){
    return(
            <>
            <div className="coracao">
                <span className="ativo">{icone.repeat(valor)}</span>
                <span className="inativo">{icone.repeat(5-valor)}</span>
            </div>
            </>
    )
}