let userController = require('../controllers/users');
let jwt = require('jsonwebtoken');
let { getPublicKey } = require('./jwt');

module.exports = {
    CheckLogin: async function (req, res, next) {
        try {
            let authorization = req.headers.authorization;

            if (!authorization) {
                return res.status(401).send({
                    message: "ban chua dang nhap"
                });
            }

            let token = authorization.startsWith('Bearer ')
                ? authorization.split(' ')[1]
                : authorization;

            let result = jwt.verify(token, getPublicKey(), {
                algorithms: ['RS256']
            });

            let user = await userController.GetAnUserById(result.id);

            if (!user || user.isDeleted) {
                return res.status(401).send({
                    message: "ban chua dang nhap"
                });
            }

            req.user = user;
            next();
        } catch (error) {
            return res.status(401).send({
                message: "ban chua dang nhap"
            });
        }
    }
};