const express = require('express');
const router = express.Router();
const User = require("../schemas/user.schema");
const { jwt, jwtOptions } = require("../passport/strategy.passport");

const basicUrl = '/api/auth'

router.post('/signUp', (req, res) => {
	const newUser = User({
		username: req.body.username,
		password: req.body.password
	})

	newUser.save(function (err, user) {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json("success");
		}
	})
})

router.post('/signIn', (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	if (!username || !password) {
		res.status(404).json({ Error: "Incorrect data" })
	}

	User.findOne({ username }, function (err, currentUser) {
		if (err || !currentUser) {
			return res.status(404).json("User not found");
		}

		console.log(currentUser);

		if (currentUser.password == password) {
			const timeNow = (new Date()).getTime();
			User.where({ _id: currentUser._id }).update({ last_login: timeNow }, (err, affectedRows) => {
				if (affectedRows) {
					let payload = {
						id: currentUser._id,
						last_login: timeNow
					};
					let token = jwt.sign(payload, jwtOptions.secretOrKey);
					res.json({ message: "ok", token: token });
				}else{
					res.status(500).json(err);
				}
			})
		} else {
			res.status(401).json({ message: "passwords did not match" });
		}

	});

})

router.get('/signOut', (req, res) => {
	if (req.user) {
		User.where({ _id: req.user._id }).update({ last_login: null });
	}
	res.json({
		success: true
	})
})

module.exports = {
	router,
	basicUrl
};