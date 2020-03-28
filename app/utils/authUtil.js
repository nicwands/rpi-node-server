import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        // Next middleware
        next();
    } else {
        // Forbidden
        console.log("Token not present on request");
        res.sendStatus(403);
    }
};

export const decodeClientAuth = (req) => {
    let authHeader = req.headers.authorization.split(" ");
    if (authHeader !== null && authHeader[0] === "Basic") {
        let buff = Buffer.from(authHeader[1], 'base64');
        let creds = buff.toString('ascii').split(":");
        const user = {
            email: creds[0],
            password: creds[1]
        };
        // const domain = user.email.split("@");
        // if (domain.length > 2) return 'bad email';
        return user;
    } else {
        return '403'
    }
};

export const validateLogin = async (email, password) => {
    const comparePasswords = new Promise((resolve, reject) => {
        if (email === process.env.USER_EMAIL && password === process.env.PASSWORD) {
            jwt.sign({email}, 'secretkey', (err, token) => {
                resolve(token);
            });
        } else {
            resolve('401');
        }
    });

    return await comparePasswords;
};