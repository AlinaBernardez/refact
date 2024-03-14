import { useState } from "react"

export const Calucladora = () => {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const operacion = ['+', '-', '*', '/']
    const [input, setInput] = useState('');

    const addToInput = value => {
        setInput(input + value);
    };
    const clearInput = () => {
        setInput('');
    };
    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className='calculadora'>
            <div className='input'>{input}</div>
            <div className='numbers'>
            {numbers.map((n, i) => (
                <div onClick={() => addToInput(n)} key={i} id={n}>{n}</div>
            ))}
            </div>
            <div className='operaciones'>
            {operacion.map(op => (
                <div onClick={() => addToInput(op)} key={op} id={op}>{op}</div>
            ))}
            <div onClick={() => calculateResult()}>=</div>
            <div onClick={() => clearInput()}>C</div>
            </div>
        </div>
    )
}