module.exports = {
    port: process.env.PORT || 5050,
    production: process.env.NODE_ENV === 'production',
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/notice_board',
}