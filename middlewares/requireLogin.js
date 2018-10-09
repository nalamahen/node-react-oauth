module.exports = (req, res, nex) => {
    if(!req.user) {
       return res.status(401).send({ error: 'You must log in'});
    }

    next();
};