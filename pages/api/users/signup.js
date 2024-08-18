import User from '@/models/User';
import Joi from 'joi';
import constants from '@/helpers/constants';

export default async function signupHandler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    try {
        const body = req.body;
        let { name, email, password, role } = body;

        let schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            role: Joi.string().valid('Customer', 'HotelAdmin').required()
        }).options({ allowUnknown: true });

        const { error } = schema.validate(body);

        if (error) {
            throw new Error(error.details[0].message);
        }

        switch (role) {
            case 'Customer':
                role = constants.USER_TYPE.CUSTOMER;
                break;
            case 'HotelAdmin':
                role = constants.USER_TYPE.HOTEL_ADMIN;
                break;
            default:
                throw new Error("Invalid Role");
        }

        const newUser = new User({
            name,
            email,
            password,
            role
        });

        const user = await newUser.save();
        return res.json({
            flag: constants.RESPONSE_FLAGS.ACTION_COMPLETE,
            message: "User Registered Successfully"
        });
    } catch (error) {
        return res.json({
            flag: constants.RESPONSE_FLAGS.ACTION_FAILED,
            error: error.message
        });
    }
}