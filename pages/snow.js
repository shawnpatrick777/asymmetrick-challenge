const layout = require('../components/layout.js');

module.exports = () => {
	return layout({
		content: `
        <div class='snowPage'>
        <canvas class="startSnow" id='snowCanvas'></canvas>
        <section class='section'>
            <div class='text'>
                <button type="submit" class="btn-test playBtn">Play</button>
            </div>
            <div class="snowText">
                <h1>SNOW</h1>
            </div>
        </section>
    </div>
    <script type="text/javascript" src="/public/js/snowScripts.js"></script>



    `,
	});
};
