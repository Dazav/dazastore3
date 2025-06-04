const { Schema, models, model } = require("mongoose");

const AddressSchema = new Schema({
    userEmail: {type:String, unique:true, required:true},
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streetAdress: String,
    country: String,
});

export const Address = models?.Adress ||model ('Address', AdressSchema);