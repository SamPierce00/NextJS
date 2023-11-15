import { useState, useEffect } from "react";

export default function CountButton(props) {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + props.incrementBy)
    }
    function rollOverCount() {
        if (count > props.limit) {
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    return (
        <div>
            <button onClick={handleClick}>+{props.incrementBy}</button>
            <div>{count}</div>
        </div>
    )
}