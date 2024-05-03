import React, {useState} from 'react';

const WhatsApp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (phoneNumber && message) {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        } else {
            alert('Por favor, ingresa un número de teléfono y un mensaje.');
        }
    };
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2>Enviar Mensaje por WhatsApp</h2>
            <label>Número de Teléfono:</label>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ingrese el número de teléfono..."
            />
            <label>Mensaje:</label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSendMessage} className='bg-white'>Enviar Mensaje</button>
        </div>
    );
}

export default WhatsApp;