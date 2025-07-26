const express = require('express');
const mongoose = require('mongoose');
const logger = require('./src/loggers/logger');
const messageInfo = require('./src/constants/responseInfo');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    
    logger.info(`${messageInfo.SERVICE} connected to database ✅`)

    app.listen(PORT,() => {
        
        logger.info(`${messageInfo.SERVICE} started on PORT ${PORT} 👤`);
    })
}).catch((err) => 
{
    logger.error(`${messageInfo.SERVICE} failed  to connect  database `,err);
})


