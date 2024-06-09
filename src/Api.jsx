import axios from "axios";
import { useState } from "react";




const Api = () => {
    const [count, setCount] = useState(0);

    async function generateAnswer() {
        console.log("Loading .. .  .");
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAI6yxHUaEgL6EczwejgMsKGB2dVCzNNhs",
            method: "post",
            data: { "contents": [{ "parts": [{ "text": " sasank is chris gayle" }] }] }
        })
        console.log(response);
    }
    return (
        <>
        <button onClick={generateAnswer}>Generate Answer</button>
        </>
    )
}

export default Api;
