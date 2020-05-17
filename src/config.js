const config = {
    development: {
        API_URL: 'http://anthocyanin.in/demo/backoffice',
    }
}
module.exports = config[process.env.NODE_ENV]
