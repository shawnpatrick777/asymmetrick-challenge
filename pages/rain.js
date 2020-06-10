const layout = require('../components/layout.js');

module.exports = () => {
	return layout({
		content: `
        <div class='rainPage'>
        <canvas id='rainCanvas'></canvas>
        <section class='section'>
            <div class='text'>
            <div class='text'>
                <button type="submit" class="btn-rain playBtn">Play</button>
            </div>
            </div>
            <div class="rainText">
                <h1>RAIN</h1>
            </div>
        </section>
    </div>
    <script type="text/javascript" src="/public/js/rainScripts.js"></script>






    `,
	});
};
