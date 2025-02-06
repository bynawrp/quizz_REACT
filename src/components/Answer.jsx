function Answer({value, func}){
    return <button onClick={()=>{func(value)}}>{value}</button>
}

export default Answer