import React from "React"; 

export default function Home(){
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        console.log("Hello", event);
    }

    const handleClickAgain = (name: String, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        console.log("Hello", name, event);
    }

    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(event) => handleClickAgain("Edwin", event)}>Click me again!</button>
        </div>
    )
}