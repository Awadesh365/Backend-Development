import mongoose, { model, mongo, Schema } from "mongoose"

const subscriptionSchema = new mongoose.Schema({

    subscriber: {
        type: mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,// one to whome "subscriber "is subscribing
        ref: "User"
    }

}, { Timestamps: true });

export const Subscription = mongoose.model("Subscription", subscriptionSchema);