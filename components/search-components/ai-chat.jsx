export default function AiChat(props){
    return(
        <div>
            {!props.loadingData && (props.data[0].length > 0) && <div className="bg-white text-black p-2 rounded-md shadow-2xl my-2 break-words styled-bubble box">{props.writtenText[0]}</div>}
        </div>
    )
}