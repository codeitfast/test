export default function ShowQuestion(props){
    return(
        <div>
        {!props.loadingData && props.data[0].length > 0 && <div className="bg-blue-500 rounded-md shadow-2xl my-2 styled-bubble box p-2">{props.writtenText[1]}</div>}
        </div>
    )
}