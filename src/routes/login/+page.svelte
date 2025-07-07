<script>
	import "../../styles/pages/login.scss";
	import { login } from '$lib/stores/auth';
	let email = '',
		password = '',
		error = '';

	async function handleLogin() {
		console.log('Login attempt with:', { email, password });
		try {
			await login(email, password);
			location.href = '/'; // Redirection après connexion
		} catch (err) {
			error = err.message;
		}
	}
</script>
<div class="login-container">
	<h1>Login</h1>
	<form on:submit|preventDefault={handleLogin} class="login-form">
		<input type="email" bind:value={email} placeholder="Email" required />
		<input type="password" bind:value={password} placeholder="Mot de passe" required />
		<button type="submit" class="button">Se connecter</button>
		{#if error}
			<p style="color: red;">{error}</p>
		{/if}
	</form>
</div>

