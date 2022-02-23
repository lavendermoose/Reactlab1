import { useState } from "react"
import './AdDesigner.css';

export function AdDesigner() {

    const [whatToSupport, SetWhatToSupport] = useState('Chocolate');
    const [lightColor, SetLightColor] = useState(true);
    const [fontSize, setFontSize] = useState(18);

    const styles = {
        fontSize: fontSize + 'px'
    }


    return (
        <div>
            <h1>Ad Designer</h1>

            <div className={lightColor ? 'ad light' : 'ad dark'}>
                <p>Vote For</p>
                <h2 style={styles} >{whatToSupport}</h2>
            </div>

            <h3>What To Support</h3>
            <button onClick={() => SetWhatToSupport('Chocolate')}>Chocolate</button>
            <button onClick={() => SetWhatToSupport('Vanilla')}>Vanilla</button>
            <button onClick={() => SetWhatToSupport('Strawberry')}>Strawberry</button>

            <h3>Color Theme</h3>
            <button onClick={() => SetLightColor(true)}>Light</button>
            <button onClick={() => SetLightColor(false)}>Dark</button>

            <h3>Font Size</h3>
            <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
            <label>{fontSize}</label>
            <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        </div>
    )
}