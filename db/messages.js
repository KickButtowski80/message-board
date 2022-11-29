const Joi = require('joi');
const db = require('./connection');
const uniqid = require('uniqid');
const { saveToDatabase } = require('./utils');


const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
});

const { messages } = db;

function getAll() {
    return messages;
}

function create(message) {
    if (!message.username)
        message.username = 'Anonymous';
    const result = schema.validate(message);

    if (result.error == null) {
        message = { id: uniqid(), ...message, created: new Date() }
        messages.unshift(message);
        saveToDatabase(messages)
        // return Promise.resolve(messages)
        return messages
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};