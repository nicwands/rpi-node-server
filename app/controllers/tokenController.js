import { decodeClientAuth, validateLogin } from '../utils/authUtil';

export const getToken = (req, res) => {
    const clientAuth = decodeClientAuth(req);
    if (clientAuth === '403') {
        res.sendStatus(403);
    } else {
        validateLogin(clientAuth.email, clientAuth.password).then((returned) => {
            if (returned !== '401') {
                console.log(returned);
                res.json({status: 200, token: returned});
            } else {
                res.sendStatus(401)
            }
        })
    }
};