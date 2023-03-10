window.onload = function() {
	const SCREEN_RATIO = 16 / 9;
	let cvs = document.getElementById("canvas");
	let ctx = cvs.getContext("2d");
	function drawFrame() {
		let t0 = Date.now();
		cvs.width = cvs.clientWidth;
		cvs.height = cvs.clientHeight;
		let x0 = Math.max(0, Math.floor((cvs.width - cvs.height * SCREEN_RATIO) / 2));
		let y0 = Math.max(0, Math.floor((cvs.height - cvs.width / SCREEN_RATIO) / 2));
		let width = Math.floor(cvs.width - x0 * 2);
		let height = Math.floor(cvs.height - y0 * 2);
		ctx.fillStyle = "#00ff00";
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		ctx.fillStyle = "#000000";
		ctx.fillRect(4, 4, cvs.width - 8, cvs.height - 8);
		ctx.fillStyle = "#00ffff";
		ctx.fillRect(x0 + 8, y0 + 8, width - 16, height - 16);
		ctx.fillStyle = "#220000";
		ctx.fillRect(x0 + 12, y0 + 12, width - 24, height - 24);
		let t1 = Date.now();
		console.log("SIZE: " + cvs.width + "x" + cvs.height + "; FPS: " + 1000 / (t1 - t0));
	}
	visualViewport.addEventListener("resize", drawFrame);
	drawFrame();
}
