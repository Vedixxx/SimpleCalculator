import React, {useState} from "react";
import axios from "axios";

function App()
{
    const [n1, setN1]= useState("");
    const [n2, setN2]= useState("");
    const [op, setOP]= useState("");
    const [error, setERROR]= useState("");
    const [res, setRES]= useState(null);

    const calc= async() =>
    {
        setERROR("");
        setRES("");

        try
        {
            const res= await axios.post("http://127.0.0.1:5000/api/calc", {n1, op, n2});
            setRES(res.data);
        }
        catch(err)
        {
            setERROR("INVALID INPUT!!!");
        }
    };

    return
    (
        <div style= {{backgroundColor: "black", color: "turquoise", textAlign: "center", marginTop: "50px", fontFamily: "Comic Sans"}}>
            <h1 style= {{color: "#0ff", textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #00f"}}>
                SIMPLE CALCULATOR
            </h1>
            <br/>
            <br/>
            <br/>
            <input 
                type= "text"
                placeholder= "Enter the FIRST number..."
                style= {{padding: "10px 15px", border: "2px solid turquoise"}}
                value= {n1}
                onChange= {(e)=> setN1(e.target.value)}
            />
            <br/>
            <input 
                type= "text"
                placeholder= "Enter the OPERATOR..."
                style= {{padding: "10px 15px", border: "2px solid turquoise"}}
                value= {op}
                onChange= {(e)=> setOP(e.target.value)}
            />
            <br/>
            <input 
                type= "text"
                placeholder= "Enter the SECOND number..."
                style= {{padding: "10px 15px", border: "2px solid turquoise"}}
                value= {n2}
                onChange= {(e)=> setN2(e.target.value)}
            />
            <br/>
            <button 
                style= {{color: "purple", backgroundColor: "turquoise"}}
                onClick= {calc}
            >
                Calculate...
            </button>
            <br/>
            <br/>
            {
                error && <p style= {{color: "red"}}>{error}</p>
            }
            {
                res && (
                    <div>
                        <h2 color= "purple" style= {{padding: "10px 15px", border: "2px solid turquoise"}}>
                            RESULT: res.data
                        </h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;