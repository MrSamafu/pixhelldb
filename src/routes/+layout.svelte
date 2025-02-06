<script>
	import '../app.css';
	import "../styles/main.scss";
	let { children } = $props();
</script>
<header class="header">
	<div class="profil">
		<i class="bi bi-house"></i>
	</div>
	<h1 class="main-title">PixhellDB</h1>
	<div class="profil">
		<i class="bi bi-person"></i>
	</div>
</header>
{@render children()}
