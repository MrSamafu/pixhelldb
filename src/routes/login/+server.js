import { redirect } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const { username, password } = await request.json();

    if (username === 'admin' && password === 'password') {
        cookies.set('session', 'user_token', {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24
        });

        throw redirect(302, '/');
    }

    return new Response(JSON.stringify({ error: 'Identifiants incorrects' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
    });
}
