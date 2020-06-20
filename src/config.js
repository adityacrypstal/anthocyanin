const config = {
    development: {
        API_URL: 'https://anthocyanin.in/backoffice',
    }, production: {
        API_URL: 'https://anthocyanin.in/backoffice',
    },
}
module.exports = config[process.env.NODE_ENV || 'development']
