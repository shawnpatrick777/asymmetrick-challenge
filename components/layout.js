module.exports = ({ content }) => {
	return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Particle Challenge</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@900&display=swap" rel="stylesheet"> 
        <link href="/public/css/main.css" rel="stylesheet">
      </head>

      <body class="admin">
        <header>
          <nav class="navbar navbar-bottom">
            <div class="container navbar-container">
              <div class="GITcode">
                <a href="#">
                  <h3 class="title">Get the Code</h3>
                </a>
              </div>
              <div class="navbar-item">
                <div class="navbar-buttons">
                  <div class="navbar-item btns">
                    <a href="/">
                    <button type="button" class="partChallengeBTN homeBTN">Home</button>
                    </a>
                  </div>
                  <div class="navbar-item btns">
                    <a href="/winter-is-coming">
                    <button type="button" class="partChallengeBTN snowBTN">Snow</button>
                    </a>
                  </div>
                  <div class="navbar-item btns">
                    <a href="/blame-it-on-the-rain">
                    <button type="button" class="partChallengeBTN rainBTN">Rain</button>
                    </a>
                  </div> 
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div class="container">
          ${content}
        </div>
        
        
        
      </body>
    </html>
  `;
};
