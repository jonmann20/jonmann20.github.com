import Util from './util';

class BallPit {
	constructor(doc) {
		this.doc = doc;
		this.boundOnRoute = (e) => this.destroy(e.detail);
		addEventListener('route', this.boundOnRoute, {passive: true});

		this.canvas = doc.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.radius = 16.5;
		this.balls = [];

		this.canvas.width = Util.getMainWidth / 1.5;
		this.canvas.height = this.canvas.width / 2;

		// set up modifications
		this.boundOnNumBalls = (e) => this.onNumBalls(e.target.value);
		this.boundOnSizeBalls = (e) => this.onSizeBalls(e.target.value);
		this.boundOnSpeedBalls = (e) => this.onSpeedBalls(e.target.value);

		doc.querySelector('.numBalls').addEventListener('input', this.boundOnNumBalls);
		doc.querySelector('.sizeBalls').addEventListener('input', this.boundOnSizeBalls);
		doc.querySelector('.speedBalls').addEventListener('input', this.boundOnSpeedBalls);

		// initialize the array of balls
		for(let i = 0; i < 20; ++i) {
			this.balls.push({
				x: Math.floor(Math.random() * (this.canvas.width + 1)),
				y: Math.floor(Math.random() * (this.canvas.height + 1)),
				velocity: {
					x: Math.floor(Math.random() * (-3)),  // [-2, 2]
					y: Math.floor(Math.random() * 7) - 3  // [-3, 3]
				},
				color: this.getRandomColor()
			});
		}

		this.runSim();
	}

	destroy(page) {
		if(page === 'playground/ball-pit') {
			return;
		}

		removeEventListener('route', this.boundOnRoute, {passive: true});
		cancelAnimationFrame(this.animLoop);

		const numBalls = this.doc.querySelector('.numBalls');
		const sizeBalls = this.doc.querySelector('.sizeBalls');
		const speedBalls = this.doc.querySelector('.speedBalls');

		if(numBalls) {
			numBalls.removeEventListener('input', this.boundOnNumBalls);
		}

		if(sizeBalls) {
			sizeBalls.removeEventListener('input', this.boundOnSizeBalls);
		}

		if(speedBalls) {
			speedBalls.removeEventListener('input', this.boundOnSpeedBalls);
		}

		delete window.ballPit;
	}

	update() {
		for(let ball of this.balls) {
			// update position
			ball.x += ball.velocity.x;
			ball.y += ball.velocity.y;

			// detect collisions
			if((ball.x - this.radius) < 0 && ball.velocity.x < 0) {
				ball.velocity.x = -ball.velocity.x;
			}

			if(ball.y >= (this.canvas.height - this.radius) && ball.velocity.y > 0) {
				ball.velocity.y = -ball.velocity.y;
			}

			if(ball.x >= (this.canvas.width - this.radius) && ball.velocity.x > 0) {
				ball.velocity.x = -ball.velocity.x;
			}

			if((ball.y - this.radius) < 0 && ball.velocity.y < 0) {
				ball.velocity.y = -ball.velocity.y;
			}
		}
	}

	render() {
		// draw background
		this.ctx.fillStyle = '#0098ff';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// draw balls
		for(const ball of this.balls) {
			this.ctx.fillStyle = ball.color;
			this.ctx.beginPath();
			this.ctx.arc(ball.x, ball.y, this.radius, 0, 2 * Math.PI, false);
			this.ctx.fill();
		}
	}

	runSim() {
		this.update();
		this.render();

		this.animLoop = requestAnimationFrame(() => this.runSim());
	}

	fixArr(num) {
		let i = 0, diff = this.balls.length - num;

		if(diff > 0) {
			for(; i < diff; ++i) {
				this.balls.pop();
			}
		}
		else if(diff < 0) {
			diff = -diff;

			for(; i < diff; ++i) {
				// (max   - min + 1)  + min
				let ball = {
					x: Math.floor(Math.random() * (this.canvas.width - 0 + 1)) + 0, // [0, canvas.width]
					y: Math.floor(Math.random() * (this.canvas.height + 1)),        // [0, canvas.height]
					velocity: {
						x: Math.floor(Math.random() * (2 - (-2) + 1)) + (-2),       // [-2, 2]
						y: Math.floor(Math.random() * (3 - (-3) + 1)) + (-3)        // [-3, 3]
					},
					color: this.getRandomColor()
				};

				if(ball.velocity.x === 0) {
					ball.velocity.x = 1;
				}

				if(ball.velocity.y === 0) {
					ball.velocity.y = 1;
				}

				this.balls.push(ball);
			}
		}
	}

	updateUserSpeed(oldSpeed, newSpeed) {
		let originalVx, originalVy;

		for(let ball of this.balls) {
			originalVx = ball.velocity.x / oldSpeed;
			originalVy = ball.velocity.y / oldSpeed;

			ball.velocity.x = originalVx * newSpeed;
			ball.velocity.y = originalVy * newSpeed;
		}
	}

	onNumBalls(num) {
		this.doc.querySelector('.litNumBalls').textContent = num;
		this.fixArr(num);
	}

	onSizeBalls(num) {
		this.doc.querySelector('.litSizeBalls').textContent = num;
		this.radius = num;
	}

	onSpeedBalls(num) {
		this.updateUserSpeed(this.doc.querySelector('.litSpeedBalls').textContent, num);
		this.doc.querySelector('.litSpeedBalls').textContent = num;
	}

	getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';

		for(let i = 0; i < 6; ++i) {
			color += letters[Math.floor(Math.random() * 16)];
		}

		return color;
	}
}

export default BallPit;