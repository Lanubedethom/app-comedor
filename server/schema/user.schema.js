import Joi from "joi";

const id = Joi.number().integer();
const username = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(6);
const role = Joi.string();

export const createUSerSchema = Joi.object({
    username: username.required(),
    email: email.required(),
    password: password.required(),
    role: password.required()
});

export const updateUserSchema = Joi.object({
    username: username,
    email: email,
    password: password,
    role: role
})

export const getUserSchema = Joi.object({
    id: id.required()
});



