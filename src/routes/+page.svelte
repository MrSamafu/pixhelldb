<script>
    import "../styles/pages/home.scss";
    import { goto } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';

    export function load({ cookies }) {
        const session = cookies.get("session");

        if (!session) {
            throw redirect(302, '/login');
        }

        return { session };
    }

    function navigate(event) {
        const link = event.currentTarget.getAttribute('data-link');
        if (link) {
            goto(link); // Utilisation de la navigation SvelteKit
        }
    }
        

</script>

<div class="first-container">
    <div class="wrap-button">
        <button 
            class="button" 
            data-link="/jeux" 
            onclick={navigate}
            >
            <p>Jeux</p>
        </button>
        <button class="button" data-link="/consoles" onclick={navigate}>
            <p>Consoles</p>
        </button>
        <button class="button" data-link="/accessoires" onclick={navigate}>
            <p>Accessoires</p>
        </button>
        <button class="button" data-link="/macollection" onclick={navigate}>
            <p>Ma collection</p>
        </button>
        <button class="button" data-link="/references" onclick={navigate}>
            <p>Références</p>
        </button>
    </div>
</div>