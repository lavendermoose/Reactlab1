import { useState } from "react"
import './Votes.css';

export function Votes() {

    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [strawberrieVotes, setStrawberrieVotes] = useState(0);


    return (
        <div>
            <h1>Vote Here</h1>
            <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
            <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
            <button onClick={() => setStrawberrieVotes(strawberrieVotes + 1)}>Strawberry</button>
            <div>
                <h2>Chocolate: {chocolateVotes} </h2>
                <h2>Vanilla: {vanillaVotes}</h2>
                <h2>Strawberry: {strawberrieVotes}</h2>

            </div>
        </div>
    )
}