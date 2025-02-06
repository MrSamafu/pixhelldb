<script>
	import { login } from '$lib/stores/auth';
	let email = '',
		password = '',
		error = '';

	async function handleLogin() {
		try {
			await login(email, password);
			location.href = '/'; // Redirection après connexion
		} catch (err) {
			error = err.message;
		}
	}
</script>

<form on:submit|preventDefault={handleLogin}>
	<input type="email" bind:value={email} placeholder="Email" required />
	<input type="password" bind:value={password} placeholder="Mot de passe" required />
	<button type="submit">Se connecter</button>
	{#if error}
		<p style="color: red;">{error}</p>
	{/if}
</form>
