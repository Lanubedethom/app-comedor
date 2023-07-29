import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const surname = Joi.string();
const code = Joi.string().length(6);
const career = Joi.string();
const diner = Joi.bool();

export const createStudentSchema = Joi.object({
    name: name.required(),
    surname: surname.required(),
    code: code.required(),
    career: career.required(),
    diner: Joi.bool()
});

export const updateStudentSchema = Joi.object({
    name: name,
    surname: surname,
    code: code,
    career: career,
    diner: diner
})

export const getStudentSchema = Joi.object({
    id: id.required()
});



