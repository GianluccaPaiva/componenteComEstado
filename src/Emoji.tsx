import "./Emoji.css"
const EMOJIS = new Map<string, string>(
    [
        ["hot", "😈"],
        ["sick", "🥴"],
        ["silence","🤫"],
    ]
);

export  default function Emoji(){
    let face = "hot";
    function ficaDoente(){
        console.log("Testa chat");
        face = "sick";
    }
    function ficaQuente(){
        console.log("Testa chat");
        face = "hot";
    }
    function ficaSilence(){
        console.log("Testa chat");
        face = "silence";

    }
    return(
        <>
        <div className="emoji">
            {EMOJIS.get(face)|| "🥶"}
        </div>
            <button onClick={ficaQuente}>hot</button>
            <button onClick={ficaDoente}>sick</button>
            <button onClick={ficaSilence}>silence</button>
        </>
    )
}