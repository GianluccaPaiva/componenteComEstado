import { useState } from "react";
import "./Emoji.css"
import { Icone } from "./Coracao";
const EMOJIS = new Map<string, string>(
    [
        ["vivo", "🙂"],
        ["doente", "🥴"],
        ["morto","☠️"]
    ]
);

export  default function Emoji(){
    let situacao = "vivo";
    const [saude,setSaude] = useState(4);
    const [energia,setEnergia] = useState(3);
    const [agua,setAgua] = useState(2);
    const [comida,setComida] = useState(1);
    
    if(saude === 0){
        situacao = "morto";
    }
    else if(saude <= 3){
        situacao = "doente";
    }

    function alimenta(){
        setComida(Math.min(5,comida+1));
    }
    function hidatar(){
        setAgua(Math.min(5,agua+1));
    }
    function  desligarLigar(){
        
    }

    function ciclo(){
        setComida(Math.max(0, comida - 1));
        setAgua(Math.max(0, agua - 1));
        setEnergia(Math.max(0, energia - 1));
        setSaude((saude)=>{if(comida ===0) {return Math.max(0, saude - 1)}else{return saude}});
        setSaude((saude)=>{if(agua ===0) {return Math.max(0, saude - 1)}else{return saude}});
        setSaude((saude)=>{if(energia ===0) {return Math.max(0, saude - 1)}else{return saude}});
    }
    console.log("Desenho: ",situacao);
    return(
        <>
        <div className="emoji">
            <div className="situacao">
                {EMOJIS.get(situacao)|| "🥶"}
                </div>
        </div>
        <div className="atributo">
            <Icone icone="❤️" valor = {saude}></Icone>
            <Icone icone="💧" valor = {agua}></Icone>
            <Icone icone="🍗" valor = {comida} ></Icone>
            <Icone icone="⚡" valor = {energia}></Icone>
        </div>
            <div className="acoes">
            <button onClick={alimenta}>Dar comida</button>
            <button onClick={hidatar}>Beber água</button>
            <button onClick={desligarLigar}>Desligar/Ligar Luz</button>
            <button onClick={ciclo}>É o ciclo sem fim</button>
        </div>

        </>
    )
}