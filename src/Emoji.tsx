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

export type EmojType = {
    saude:number;
    energia:number;
    agua:number;
    comida:number;
}

export  default function Emoji(){
    let situacao = "vivo";
    //abstraindo para um objeto com atributos
    const [emoji, setEmoji] = useState<EmojType>({
        saude:5,
        energia:4,
        agua:3,
        comida:1
    })
    //retiramos cada estado dessa maneira e usamos a partir de objetos
    /*const [saude,setSaude] = useState(4);
    const [emoji.energia,setEnergia] = useState(3);
    const [emoji.agua,setAgua] = useState(2);
    const [emoji.comida,setComida] = useState(1);*/
    
    if(emoji.saude === 0){
        situacao = "morto";
    }
    else if(emoji.saude <= 3){
        situacao = "doente";
    }

    //métodos de alteração do estado do objeto emoji
    //por alteração de objeto via valor e posição
    function alimenta(){
        if(emoji.saude == 0)return;
        const newEmoji = structuredClone(emoji);//copia os atributos do objeto "clonando a struct"
        newEmoji.comida = Math.min(5,emoji.comida+1);
        setEmoji(newEmoji);
    }
    function hidatar(){
        if(emoji.saude == 0)return;
        /* ou assim const newEmoji:EmojType = {
            saude: emoji.saude,
            agua:Math.min(5,emoji.agua+1),
            comida:emoji.comida,
            energia:emoji.energia
        } ou :*/
        const newEmoji:EmojType = {
            ...emoji,//traz os campos do emoji anterior para o newEmoji (metodo de desustruração do objeto)
            agua:Math.min(5,emoji.agua+1),// na agua reconhece diferença e substitui aquela agua do emoji antigo pro novo
        }
        setEmoji(newEmoji);
    }
    function  desligarLigar(){
        
    }

    function ciclo(){
        /*setComida(Math.max(0, emoji.comida - 1));
        setAgua(Math.max(0, emoji.agua - 1));
        setEnergia(Math.max(0, emoji.energia - 1));
        setSaude((prevSaude)=>{if(emoji.comida ===0) {return Math.max(0, prevSaude - 1)}else{return prevSaude}});
        setSaude((prevSaude)=>{if(emoji.agua ===0) {return Math.max(0, prevSaude - 1)}else{return prevSaude}});
        setSaude((prevSaude)=>{if(emoji.energia ===0) {return Math.max(0, prevSaude - 1)}else{return prevSaude}});
        */
       if(emoji.saude == 0)return;
       setEmoji({...emoji,
            comida:Math.max(0, emoji.comida - 1),
            agua:Math.max(0, emoji.agua - 1),
            energia:Math.max(0, emoji.energia - 1),
       });
       setEmoji((prevEmoji)=>{
            if(emoji.comida === 0){ 
                return{...prevEmoji,
                    saude:Math.max(0, prevEmoji.saude - 1),
                }
            }else{
                return prevEmoji;
            }
       })
       //compactado, mas é mesma ideia do comida acima
       setEmoji(prevEmoji=>(
            emoji.agua ===0?{...prevEmoji,
                saude:Math.max(0, prevEmoji.saude - 1)
            }:prevEmoji
        ))
        setEmoji(prevEmoji=>(
            emoji.energia ===0?{...prevEmoji,
                saude:Math.max(0, prevEmoji.saude - 1)
            }:prevEmoji
        ))

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
            <Icone icone="❤️" valor = {emoji.saude}  ></Icone>
            <Icone icone="💧" valor = {emoji.agua}   ></Icone>
            <Icone icone="🍗" valor = {emoji.comida} ></Icone>
            <Icone icone="⚡"  valor = {emoji.energia}></Icone>
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