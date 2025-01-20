import { writable } from 'svelte/store';

export const user = writable(null);

export const login = async (email, password) => {
    const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, mot_de_passe: password })
    });

    const data = await res.json();
    if (res.ok) {
        localStorage.setItem('token', data.token);
        user.set(data);
    } else {
        throw new Error(data.error);
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    user.set(null);
};
