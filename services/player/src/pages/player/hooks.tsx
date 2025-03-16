import { useRef, useEffect, useCallback } from 'react';

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFC733'];
const CONFETTI_COUNT = 800;
const MIN_SIZE = 1;
const MAX_SIZE = 3;
const MIN_VELOCITY_Y = 1;
const MAX_VELOCITY_Y = 3;
const VELOCITY_X_SPREAD = 1.5;
const DEFAULT_DURATION = 10000;

export const useConfetti = (duration = DEFAULT_DURATION) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const dpr = window.devicePixelRatio || 1;
		canvas.width = window.innerWidth * dpr;
		canvas.height = window.innerHeight * dpr;

		const ctx = canvas.getContext('2d');
		if (ctx) {
			ctx.scale(dpr, dpr);
		}
	}, []);

	const triggerConfetti = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		resizeCanvas();

		const confetti = Array.from({ length: CONFETTI_COUNT }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height - canvas.height,
			size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
			color: COLORS[Math.floor(Math.random() * COLORS.length)],
			velocityY: Math.random() * (MAX_VELOCITY_Y - MIN_VELOCITY_Y) + MIN_VELOCITY_Y,
			velocityX: (Math.random() - 0.5) * VELOCITY_X_SPREAD,
		}));

		let animationFrameId: number;

		const render = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const particle of confetti) {
				particle.x += particle.velocityX;
				particle.y += particle.velocityY;

				if (particle.y > canvas.height) {
					particle.y = -particle.size;
					particle.x = Math.random() * canvas.width;
				}

				ctx.fillStyle = particle.color;
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fill();
			}

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		setTimeout(() => {
			cancelAnimationFrame(animationFrameId);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}, duration);
	}, [duration, resizeCanvas]);

	useEffect(() => {
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, [resizeCanvas]);

	return { canvasRef, triggerConfetti };
};
