import {decodeClientAuth, validateLogin} from "../utils/authUtil";

export const validate = async (req, res) => {
    const clientAuth = decodeClientAuth(req);
    if (clientAuth === '403') {
        res.sendStatus(403);
    } else {
        validateLogin(clientAuth.username, clientAuth.password).then((returned) => {
            if (returned !== '401') {
                console.log("token: ", returned);
                res.cookie('access_token', returned, {
                    maxAge: 86400000,
                    httpOnly: true
                });
                res.sendStatus(200);
            } else {
                res.sendStatus(401)
            }
        })
    }
};