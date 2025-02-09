<script>
	import '../app.css';
	import "../styles/main.scss";
	let { children } = $props();
	import { goto } from '$app/navigation';

	function navigate(event) {
        const link = event.currentTarget.getAttribute('data-link');
        if (link) {
            goto(link); // Utilisation de la navigation SvelteKit
        }
    }

</script>
<header class="header">
	<button class="profil" onclick={navigate} data-link="/" aria-label="home">
		<i class="bi bi-house"></i>
	</button>
	<h1 class="main-title">PixhellDB</h1>
	<button class="profil" onclick={navigate} data-link="/profil" aria-label="profil">
		<i class="bi bi-person"></i>
	</button>
</header>
{@render children()}
