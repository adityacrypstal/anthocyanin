const config = {
    development: {
        API_URL: 'https://anthocyanin.in/demo/backoffice',
    }, production: {
        API_URL: 'https://anthocyanin.in/demo/backoffice',
    },
}
module.exports = config[process.env.NODE_ENV || 'development']
