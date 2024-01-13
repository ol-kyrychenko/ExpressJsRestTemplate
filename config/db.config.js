const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: 'localhost',
        user: 'app_user',
        password: 'app_pwd',
        database: 'employees',
        connectTimeout: 60000,
    },
    listPerPage: 10,
};
module.exports = config;
