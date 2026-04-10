<script lang="ts">
import { onMount } from "svelte";

interface Numeral {
  value: number;
  roman: string;
}

let numerals: Numeral[] = [
  { value: 1, roman: "I" },
  { value: 2, roman: "II" },
  { value: 3, roman: "III" },
  { value: 4, roman: "IV" },
  { value: 5, roman: "V" },
  { value: 6, roman: "VI" },
  { value: 7, roman: "VII" },
  { value: 8, roman: "VIII" },
];

let activeIndex = 0;

onMount(() => {
  const interval = setInterval(() => {
    activeIndex = (activeIndex + 1) % numerals.length;
  }, 3000);

  return () => clearInterval(interval);
});
</script>

<div class="container">
	<div class="background-orb orb-1"></div>
	<div class="background-orb orb-2"></div>

	<div class="numerals-grid">
		{#each numerals as numeral, index (numeral.value)}
			<div
				class="numeral-item"
				class:active={index === activeIndex}
				style="--index: {index}"
			>
				<div class="numeral-glow"></div>
				<div class="numeral-text">{numeral.roman}</div>
				<div class="numeral-label">{numeral.value}</div>
			</div>
		{/each}
	</div>

	<div class="stars">
		{#each { length: 12 } as _, i}
			<div class="star" style="--star-index: {i}"></div>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

	:root {
		--primary-glow: #0ff;
		--secondary-glow: #a855f7;
		--tertiary-glow: #ec4899;
		--dark-bg: #0a0e27;
		--dark-surface: #151d3a;
	}

	.container {
		position: relative;
		width: 100%;
		min-height: 100vh;
		background: linear-gradient(135deg, var(--dark-bg) 0%, #0f1629 50%, #1a0d2e 100%);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Space Mono', monospace;
	}

	/* Animated background orbs */
	.background-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.15;
		animation: float 20s ease-in-out infinite;
	}

	.orb-1 {
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, #0ff, transparent);
		top: -200px;
		left: -200px;
		animation-duration: 25s;
	}

	.orb-2 {
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, #a855f7, transparent);
		bottom: -150px;
		right: -150px;
		animation-duration: 30s;
		animation-direction: reverse;
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(50px, -50px);
		}
		66% {
			transform: translate(-30px, 30px);
		}
	}

	/* Star field */
	.stars {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.star {
		position: absolute;
		width: 2px;
		height: 2px;
		background: white;
		border-radius: 50%;
		animation: twinkle 3s ease-in-out infinite;
		--star-index: 0;
	}

	.star:nth-child(1) {
		top: 15%;
		left: 20%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(2) {
		top: 25%;
		right: 15%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(3) {
		top: 50%;
		left: 10%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(4) {
		top: 60%;
		right: 20%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(5) {
		bottom: 20%;
		left: 30%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(6) {
		bottom: 30%;
		right: 25%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(7) {
		top: 35%;
		left: 50%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(8) {
		top: 45%;
		right: 40%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(9) {
		bottom: 40%;
		left: 70%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(10) {
		bottom: 15%;
		right: 10%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(11) {
		top: 20%;
		left: 70%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}
	.star:nth-child(12) {
		bottom: 50%;
		right: 50%;
		animation-delay: calc(var(--star-index) * 0.3s);
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 1;
		}
	}

	/* Grid layout */
	.numerals-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 40px;
		padding: 60px 40px;
		position: relative;
		z-index: 10;
		max-width: 1000px;
		width: 100%;
	}

	/* Individual numeral item */
	.numeral-item {
		position: relative;
		height: 180px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.numeral-item:hover {
		transform: scale(1.1);
	}

	.numeral-item.active {
		animation: pulse-active 0.6s ease-out;
	}

	@keyframes pulse-active {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.15);
		}
		100% {
			transform: scale(1);
		}
	}

	/* Glow background */
	.numeral-glow {
		position: absolute;
		inset: -20px;
		background: radial-gradient(circle, rgba(15, 255, 255, 0.2), transparent);
		border-radius: 50%;
		filter: blur(20px);
		animation: glow-pulse 2s ease-in-out infinite;
		transition: all 0.4s ease;
	}

	.numeral-item.active .numeral-glow {
		background: radial-gradient(circle, rgba(15, 255, 255, 0.5), rgba(168, 85, 247, 0.3), transparent);
		animation: glow-pulse-active 0.6s ease-out;
	}

	@keyframes glow-pulse {
		0%,
		100% {
			filter: blur(20px);
			opacity: 0.5;
		}
		50% {
			filter: blur(30px);
			opacity: 0.8;
		}
	}

	@keyframes glow-pulse-active {
		0% {
			filter: blur(10px);
			opacity: 0.3;
		}
		50% {
			filter: blur(40px);
			opacity: 1;
		}
		100% {
			filter: blur(20px);
			opacity: 0.7;
		}
	}

	/* Roman numeral text */
	.numeral-text {
		position: relative;
		font-family: 'Orbitron', sans-serif;
		font-size: 4.5rem;
		font-weight: 900;
		letter-spacing: 8px;
		color: var(--primary-glow);
		text-shadow:
			0 0 10px var(--primary-glow),
			0 0 20px var(--primary-glow),
			0 0 40px rgba(168, 85, 247, 0.6),
			0 0 80px rgba(236, 72, 153, 0.3);
		z-index: 2;
		transition: all 0.3s ease;
		will-change: text-shadow, color;
	}

	.numeral-item.active .numeral-text {
		color: #fff;
		text-shadow:
			0 0 10px var(--primary-glow),
			0 0 20px var(--primary-glow),
			0 0 40px var(--secondary-glow),
			0 0 80px var(--tertiary-glow);
		filter: drop-shadow(0 0 20px var(--secondary-glow));
	}

	/* Decimal label */
	.numeral-label {
		position: relative;
		font-family: 'Space Mono', monospace;
		font-size: 0.85rem;
		font-weight: 400;
		letter-spacing: 3px;
		color: rgba(255, 255, 255, 0.5);
		text-transform: uppercase;
		margin-top: 12px;
		transition: color 0.3s ease;
		z-index: 2;
	}

	.numeral-item.active .numeral-label {
		color: var(--primary-glow);
	}

	/* Decorative elements */
	.numeral-item::before {
		content: '';
		position: absolute;
		inset: -5px;
		border: 1px solid rgba(15, 255, 255, 0.1);
		border-radius: 8px;
		opacity: 0;
		transition: all 0.4s ease;
		z-index: 1;
	}

	.numeral-item.active::before {
		border-color: rgba(15, 255, 255, 0.6);
		opacity: 1;
		box-shadow:
			inset 0 0 10px rgba(15, 255, 255, 0.1),
			0 0 20px rgba(168, 85, 247, 0.2);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.numerals-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 24px;
			padding: 40px 20px;
		}

		.numeral-text {
			font-size: 2.5rem;
			letter-spacing: 4px;
		}

		.numeral-item {
			height: 120px;
		}

		.background-orb {
			filter: blur(60px);
		}
	}
</style>
