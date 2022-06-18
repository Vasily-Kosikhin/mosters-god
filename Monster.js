import mongoose from 'mongoose';

const Monster = new mongoose.Schema({
  name: { type: String, required: true },
  health: { type: String, required: true }
});

export default mongoose.model('data', Monster);
