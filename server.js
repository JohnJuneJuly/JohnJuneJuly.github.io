const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
const server = app.listen(port);
// const io = require('socket.io')(somePort);
const io = require('socket.io')(server);

// app.listen(port, () => console.log("Server listening on port: " + port));

app.get("/", function(req, resp) { //send users to index file
    resp.sendFile(__dirname + "/index.html");
    // resp.sendFile(__dirname + "/index2.html");
});
app.get("/test", function(req, resp) { //send users to index file
    // var request = require('request');
    // var options = {
    //     'method': 'GET',
    //     'url': ''+url+'',
    //     'headers': {
    //         'Cookie': '__cfduid=d207d85138d8e495ac2e3bd4c5d6623fc1596672938'
    //     }
    // };
    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    // //   console.log(response.body);
    //     socket.emit('SEND_Data', response.body);
    // });

    resp.sendFile(__dirname + "/test.html");
    // resp.sendFile(__dirname + "/index2.html");
});

// var request = require('request');
// var options = {
//     'method': 'GET',
//     // 'url': ''+url+'',
//     'url': 'https://api.opendota.com/api/players/162757300',
//     'headers': {
//         'Cookie': '__cfduid=d207d85138d8e495ac2e3bd4c5d6623fc1596672938'
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

console.log("Server running at http://localhost:%d", port);