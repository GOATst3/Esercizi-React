import { useMemo } from "react"

export default function FilteredList({list}){
    function filter(){
        return list.filter(person=> person.age>17)
    }
    
    const memo = useMemo(()=>filter(),[list])
    console.log(memo)

    return (
        <>
            {memo.map(item=><h1>{item.name}, {item.age}<br/></h1>)}
        </>
    )
}