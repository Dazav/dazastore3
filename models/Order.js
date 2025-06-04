import { model, Schema } from "mongoose";
import { models } from "mongoose";

const OrderSchema = new Schema({
    line_items:Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streetAdress: String,
    country: String,
    paid: Boolean,
});

export const Order = models?.Order || model('Order', OrderSchema);