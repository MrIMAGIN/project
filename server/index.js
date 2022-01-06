require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/model');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandalingMiddleware');

const PORT = process.env.PORT || 1337;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

//Обработка ошибок, последний middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {console.log(PORT)});
    } catch (e) {
        console.log(e);
    }
}

start();


// require('dotenv').config();
// const express = require('express');
// const sequelize = require('./db');
// const models = require('./models/model');
// const cors = require('cors');
// const router = require('./routes/index');
// const errorHandler = require('./middleware/errorHandalingMiddleware');
// var expressWs = require('express-ws');

// const PORT = process.env.PORT || 1337;

// const app = express();
// expressWs(app);
// app.use(cors());
// app.use(express.json());
// app.use('/api', router);

// app.ws('/api', (ws) => {

//     ws.on('connection', function (connection) {
//     })

//     ws.on('message', function(message) {
//         try {
//             const jsonMessage = JSON.parse(message);
//             console.log(jsonMessage);
//             ws.send(jsonMessage.data);
//             app.get('/positions/', (req, res) => res.send('h'));

//         } catch (error) {
//             console.log('Ошибка', error);
//         }
//     })

//     ws.on('close', function () {
//         console.log('WebSocket was closed');
//     })
// })

// const start = async () => {
//     try {
//         await sequelize.authenticate();
//         await sequelize.sync();
//         app.listen(PORT, () => {console.log(PORT)});
//     } catch (e) {
//         console.log(e);
//     }
// }

// start();


