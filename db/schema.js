const mongoose = require('mongoose');


const deviceMessageSchema = mongoose.Schema({
    content: String,
    recipient: String,
    // dateSent: Date
});

const deviceSchema = mongoose.Schema({
    deviceId: Number,
    // dateRegistered: {type: Date, default: Date.now},
    messages: [deviceMessageSchema]
});

const emergencyContactsSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    relationship: String
});

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: {
        streetOne: String,
        streetTwo: String,
        city: String,
        state: String,
        zipCode: String
    },
    age: Number,
    gender: String,
    height: String,
    weight: String,
    devices: [deviceSchema],
    emergencyContacts: [emergencyContactsSchema]
});

const User = mongoose.model('User', userSchema);
const EmergencyContact = mongoose.model('EmergencyContacts', emergencyContactsSchema);
const Device = mongoose.model('Device', deviceSchema);
const DeviceMessage = mongoose.model('DeviceMessage', deviceMessageSchema);

module.exports = {
    User, EmergencyContact, Device, DeviceMessage
}