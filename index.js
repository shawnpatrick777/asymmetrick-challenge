const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const challengeRouter = require('./routes/routes');

const app = express();

app.use('/public', express.static('./public/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ['lkasld235j'],
	})
);
app.use(challengeRouter);

app.listen(3000, () => {
	console.log('Listening');
});
