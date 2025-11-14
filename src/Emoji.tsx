import "./Emoji.css"
const EMOJIS = new Map<string, string>(
    [
        ["hot", "😈"],
        ["sick", "🥴"],
        ["silence","🤫"],
    ]
);

export  default function Emoji(){
    let situacao = "happy";
    return(
        <div className="emoji">
            {EMOJIS.get(situacao)|| "🥶"}
        </div>
    )
}