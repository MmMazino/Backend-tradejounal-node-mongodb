import Trade from "../models/Trade.js"
import User from "../models/User.js";

/* CREATE */
export const createTrade = async (req, res) => {
    try {
        const {
            userId,
            picturePathM5,
            picturePathM15,
            symbol,
            session,
            position,
            entry,
            sl,
            tp,
            exit,
            time,
            netpnl,
            Date,
            description,
            tags
        } = req.body
        const newTrade = new Trade({
            userId,
            fistName: userId.firstName,
            lastName: userId.lastName,
            userPicturePath: user.picturePath,
            picturePathM5,
            picturePathM15,
            symbol,
            session,
            position,
            entry,
            sl,
            tp,
            exit,
            time,
            netpnl,
            Date,
            description,
            likes: {},
            tags,
        });
        await newPost.save();
        const trade = await Trade.find();
        res.status(201).json(trade);
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
};

/* READ */
export const getTrade = async (req, res) => {
    try {
        const trade = await Trade.find();
        res.status(200).json(trade);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserTrade = async (req, res) => {
    try {
        const { userId } = req.params;
        const trade = await Trade.find({ userId });
        res.status(200).json(trade);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
export const likeTrade = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const trade = await Trade.findById(id);
        const isLiked = trade.likes.get(userId);

        if (isLiked) {
            trade.likes.delete(userId);
        } else {
            trade.likes.set(userId, true);
        }

        const updatedTrade = await Trade.findByIdAndUpdate(
            id,
            { likes: trade.likes },
            { new: true }
        );

        res.status(200).json(updatedTrade);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};