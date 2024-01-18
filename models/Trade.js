import mongoose from "mongoose";

const tradeSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userPicturePath: String,
        picturePathM5: String,
        picturePathM15: String,
        symbol: String,
        session: String,
        position: String,
        entry: String,
        sl: String,
        tp: String,
        exit: String,
        time: String,
        netPnl: Number,
        Date: String,
        description: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        tags: {
            type: Array,
            default: [],
        }

    },
    { timestamps: true }
);

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;