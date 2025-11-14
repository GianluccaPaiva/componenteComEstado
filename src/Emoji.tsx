import { useState } from "react";
import "./Emoji.css"
const EMOJIS = new Map<string, string>(
    [
        ["hot", "😈"],
        ["sick", "🥴"],
        ["silence","🤫"],
        ["soldado", "🫡"],
    ]
);

export  default function Emoji(){
    const [situacao, setSituacao] = useState("hot");
    console.log("Desenho: ",situacao);
    function ficaDoente(){
        console.log("Desenho: ",situacao);
        setSituacao("sick");
    }
    function ficaQuente(){
        console.log("Desenho: ",situacao);
        setSituacao("hot")
    }
    function ficaSilence(){
        console.log("Desenho: ",situacao);
        setSituacao("silence")

    }
    function queroSerSeuSoldado(){
        console.log("Soldado, quero ser seu soldado");
        console.log("Desenho: ",situacao);
        setSituacao("soldado")
    }
    return(
        <>
        <div className="emoji">
            {EMOJIS.get(situacao)|| "🥶"}
        </div>
            <button onClick={ficaQuente}>hot</button>
            <button onClick={ficaDoente}>sick</button>
            <button onClick={ficaSilence}>silence</button>
            <button onClick={queroSerSeuSoldado}>soldado</button>
        </>
    )
}