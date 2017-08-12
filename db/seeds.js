require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// Require each model into seeds
var User = require('../models/user');
var EmergencyContact = require('../models/emergencycontact');
var Device = require('../models/device');
var DeviceMessage = require('../models/devicemessage');

// Use native promises
mongoose.Promise = global.Promise;

const danEmergencyContact = new EmergencyContact({
    name: "Annmarie Stockinger",
    phoneNumber: "6096683482",
    relationship: "Significant Other"
});

const danDeviceMessage = new DeviceMessage({
    content: "This is the device message",
    recipient: "Dan Message Recipient"
});

const danDevice = new Device({
    deviceId: 123456789,
    messages: [danDeviceMessage]
});

const dan = new User({
    username: "DanUsername",
    email: "Dan@email.com",
    password: "Password123",
    firstName: "Daniel",
    lastName: "Remel",
    phoneNumber: "6786135273",
    address: {
        streetOne: "240 N Highland Ave NE",
        streetTwo: "Apt 3525",
        city: "Atlanta",
        state: "Georgia",
        zipCode: "30307"
    },
    age: 23,
    gender: "M",
    height: "5\'8\"",
    weight: "125lbs",
    devices: [danDevice],
    emergencyContacts: [danEmergencyContact]
});

dan.save().then(() => console.log("User dan Saved!"));
danDevice.save().then(() => console.log("Device danDevice Saved!"));
danDeviceMessage.save().then(() => console.log("DeviceMessage danDeviceMessage Saved!"));
danEmergencyContact.save().then(() => console.log("EmergencyContact danEmergencyContact Saved"));


mongoose.connection.close();