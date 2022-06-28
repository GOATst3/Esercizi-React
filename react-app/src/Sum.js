export default function Sum (props){
    let sum=0
    for (let i = 0; i < props.numbers.length; i++) {
        sum+=props.numbers[i]
    }
    return <h1>{sum}</h1>
}