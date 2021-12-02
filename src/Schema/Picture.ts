const mongoose: any = require('mongoose');

export default mongoose.model('Picture', {
	Url: String,
	Channel: String,
});
