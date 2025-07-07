export async function handle({ event, resolve }) {
    // Récupérer les cookies d'authentification (à adapter selon ton système)
    const session = event.cookies.get("session");

    // Vérifier si l'utilisateur tente d'accéder à la page d'accueil sans être connecté
    if (!session && event.url.pathname === '/') {
        return Response.redirect(new URL('/login', event.url));
    }

    return resolve(event);
}
