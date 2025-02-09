<script>
    import "../styles/pages/home.scss";
    import { goto } from '$app/navigation';

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
        <button class="button" data-link="/login" onclick={navigate}>
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