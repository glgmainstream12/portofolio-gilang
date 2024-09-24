import React, { useState } from 'react';
import './index2.css'; // Import your CSS file

const CekKhodam: React.FC = () => {
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const khodamList = [
        "Rawa Rontek",
        "Mulyono",
        "el kecepatan",
        "Jin sekop sekop",
        "tapir jadi jadian",
        "Nyi blorong"
    ];

    const getRandomKhodam = () => {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        return khodamList[randomIndex];
    };

    const handleCheckKhodam = () => {
        if (name.trim() === "") {
            alert("Nama kamu belum diinput, silahkan input dulu");
            return;
        }

        const khodam = getRandomKhodam();
        setResult(`${name} khodam kamu adalah ${khodam}`);
    };

    return (
        <div>
            <h1 className="khodam-h1">Website Cek Khodam</h1>
            
            <div className="khodam-form-container">
                <label className="khodam-label" htmlFor="name">Tulis nama kamu disini:</label>
                <input 
                    className="khodam-input" 
                    type="text" 
                    id="name" 
                    placeholder="Nama Kamu" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <button className="khodam-button" id="checkButton" onClick={handleCheckKhodam}>
                    Cek Khodam Kamu
                </button>
            </div>

            <div id="result" className="khodam-result-container">
                {result}
            </div>
        </div>
    );
};

export default CekKhodam;
