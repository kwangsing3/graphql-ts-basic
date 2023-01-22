import {model, Schema} from 'mongoose';

const recipeSchema = new Schema({
  name: String,
  description: String,
  createAt: String,
  thumbsUp: Number,
  thumbsDown: Number,
});

export default model('Recipe', recipeSchema);
