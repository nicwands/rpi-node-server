import { decodeClientAuth, validateLogin } from '../utils/authUtil';

export const getToken = (req, res) => {
    const clientAuth = decodeClientAuth(req);
    if (clientAuth === '403') {
        res.sendStatus(403);
    } else {
        validateLogin(clientAuth.email, clientAuth.password).then((returned) => {
            if (returned !== '401') {
                console.log("token: ", returned);
                // res.json({status: 200, token: returned});
                res.cookie('token', returned, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 3600000
                });
                res.sendStatus(200);
            } else {
                res.sendStatus(401)
            }
        })
    }
};