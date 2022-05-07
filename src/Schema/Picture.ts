import mongoose, { Schema } from 'mongoose';

const schema: Schema = new mongoose.Schema({ Url: String, Channel: String });
export default mongoose.model('Picture', schema);
