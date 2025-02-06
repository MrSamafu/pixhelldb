import { writable } from 'svelte/store';

export const user = writable(null);

/**
 * Effectue une requête de connexion à l'API.
 * @param {string} email - L'adresse email de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 */
export const login = async (email , password) => {
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
