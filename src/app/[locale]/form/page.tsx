'use client';
import { useState } from 'react';
const page = () => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [mail, setMail] = useState('');

    async function sendEmail() {
        console.log(JSON.stringify({ name, mail, tel }))
        try {
            await fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, mail, tel }), // Serialize JSON
            });
            //const responseData = await response.json();
            return 
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <p>Имя</p>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
            />
            <p>телефон</p>
            <input
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                type="text"
            />
            <p>e-mail</p>
            <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="text"
            />
            <button type="button" onClick={sendEmail}>
                отправить
            </button>
        </div>
    );
};

export default page;
