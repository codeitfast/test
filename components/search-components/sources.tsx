export default function Sources(props:any){
    return(
        <div>
        {!props.loadingData && (props.data[0].length > 0) && props.data[0].map((book: any, num: any) => {
          return (<div className="p-2 rounded-md shadow-2xl my-2 break-words styled-bubble box text-white" style={{ background: props.colors.front, color: props.colors.text /* filter: 'opacity(calc(calc(var(--scroll) / 100) - ' + num/5 + '))' */ }} >{book}</div>)
        })}
        {props.data[0].length > 0 && <div className="h-8"></div>}
        </div>
    )
}