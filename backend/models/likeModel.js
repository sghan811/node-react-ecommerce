import mongoose from 'mongoose';

const like = new mongoose.Schema({
    product: {type: String, require: true},
    id: {type: Array, require:  true}
});

const likeModel = mongoose.model("like", like);
export default likeModel;