import { useRef, useEffect, useCallback } from 'react';

export const useConfetti = (duration = 5000) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const triggerConfetti = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFC733'];
		const confetti = Array.from({ length: 100 }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height - canvas.height,
			size: Math.random() * 5 + 5,
			color: colors[Math.floor(Math.random() * colors.length)],
			velocityY: Math.random() * 3 + 2,
			velocityX: (Math.random() - 0.5) * 3,
		}));

		const render = () => {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const particle of confetti) {
				particle.x += particle.velocityX;
				particle.y += particle.velocityY;

				if (particle.y > canvas.height) {
					particle.y = -particle.size;
				}

				ctx.fillStyle = particle.color;
				ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
			}

			requestAnimationFrame(render);
		};

		render();

		setTimeout(() => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}, duration);
	}, [duration]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}, []);

	return { canvasRef, triggerConfetti };
};
