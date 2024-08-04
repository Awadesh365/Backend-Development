import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // Cloudnary url
        required: true,
    },
    thumbnail: {
        type: String, // Cloudnary url
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // Cloudnary 
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }

}, { timeStamps: true });


videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema);