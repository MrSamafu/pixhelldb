<script>
    import { onMount } from 'svelte';
    let jeux = [];

    onMount(async () => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/jeux', {
            headers: { 'Authorization': token }
        });

        jeux = await res.json();
    });
</script>

<h1>🎮 Mes Jeux</h1>
<ul>
    {#each jeux as jeu}
        <li>{jeu.nom} - {jeu.description}</li>
    {/each}
</ul>
