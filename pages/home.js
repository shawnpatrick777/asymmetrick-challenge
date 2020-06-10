const layout = require('../components/layout.js');

module.exports = () => {
	return layout({
		content: `
        <div class="homePage">
            <h1>Assymetrik Code Challenge</h1>
                <section class="homeSection">
                    
                    <div class="card snowCard">
                    <a href="/winter-is-coming">
                        <canvas id="snowButton"></canvas>
                        <h3>Snow</h3>
                        </a>
                    </div>
                
                    
                    <div class="card rainCard">
                    <a href="/blame-it-on-the-rain">
                        <canvas id="rainButton"></canvas>
                        <h3>Rain</h3>
                        </a>
                    </div>
                
                </section>
		</div>
    <script type="text/javascript" src="/public/js/leafScripts.js"></script>
    `,
	});
};
