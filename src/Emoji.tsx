import { useState } from "react";
import "./Emoji.css"
import { Icone } from "./Coracao";
const EMOJIS = new Map<string, string>(
    [
        ["hot", "😈"],
        ["sick", "🥴"],
        ["silence","🤫"],
        ["soldado", "🫡"],
    ]
);
const FRASE = new Map<string, string>(
    [
        ["hot", "O pai ta quente"],
        ["sick", "Eu bebi, mas paro quando quiser"],
        ["silence","Não grita!"],
        ["soldado", "Soldado, sempre serei seu soldado"],
    ]
);
export  default function Emoji(){
    const [situacao, setSituacao] = useState("hot");
    const [frase, setFrase] = useState("hot");
    console.log("Desenho: ",situacao);
    function ficaDoente(){
        console.log("Desenho: ",situacao);
        setSituacao("sick");
        setFrase("sick");
    }
    function ficaQuente(){
        console.log("Desenho: ",situacao);
        setSituacao("hot");
        setFrase("hot")
    }
    function ficaSilence(){
        console.log("Desenho: ",situacao);
        setSituacao("silence");
        setFrase("silence")

    }
    function queroSerSeuSoldado(){
        console.log("Soldado, quero ser seu soldado");
        console.log("Desenho: ",situacao);
        setSituacao("soldado")
        setFrase("soldado");
    }

    function toProx(){
        switch(situacao){
            case "hot":
                ficaDoente();
                break;
            case "sick":
                ficaSilence();
                break;
            case "silence":
                queroSerSeuSoldado();
                break;
            default:
                ficaQuente();
                break;
        }
    }
    return(
        <>
        <div className="emoji">
            <div className="situacao">
                {EMOJIS.get(situacao)|| "🥶"}
                </div>
            {FRASE.get(frase)||"Fica frio ai"}
        </div>
        <div className="atributo">
            <Icone im="❤️" ></Icone>
            <Icone im="💧" ></Icone>
            <Icone im="🍗" ></Icone>
            <Icone im="⚡" ></Icone>
        </div>
            <div className="acoes">
            <button onClick={ficaQuente}>hot</button>
            <button onClick={ficaDoente}>sick</button>
            <button onClick={ficaSilence}>silence</button>
            <button onClick={queroSerSeuSoldado}>soldado</button>
            <button onClick={toProx}>roda todos</button>
        </div>

        </>
    )
}