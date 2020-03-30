import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token || '';
    try {
        if (!token) {
            console.log("token was not present");
            return res.render('login');
        }
        const decrypt = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = {
            email: decrypt.email,
            password: decrypt.password,
        };
        next();
    } catch (err) {
        return res.status(500).json(err.toString());
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
            jwt.sign({email}, process.env.SECRET_KEY, (err, token) => {
                resolve(token);
            });
        } else {
            resolve('401');
        }
    });

    return await comparePasswords;
};