// /controllers/giftController.js
import Gift from "../models/giftModel.js"; // your gift schema/model

export const getGiftsByCategory = async (category) => {
  if (!category) {
    return await Gift.find(); // return all gifts if no category specified
  }
  return await Gift.find({ category: category });
};