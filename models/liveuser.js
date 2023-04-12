const mongoose = require('mongoose');
const Schema = mongoose.Schema;

liveuserSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	userip: String,
	useragent: String,
    currentpage: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
Liveuser = mongoose.model('Liveuser', liveuserSchema);

module.exports = Liveuser;