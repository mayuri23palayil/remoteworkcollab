const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const http = require('http');
const authRoutes = require('./routes/auth');
const path=require("path");
dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));


app.use('/auth', authRoutes);

const server = http.createServer(app);
const io=require("socket.io")(server);
io.on("connection", function(socket){
	socket.on("sender-join",function(data){
		socket.join(data.uid);
	});
	socket.on("receiver-join",function(data){
		socket.join(data.uid);
		socket.in(data.sender_uid).emit("init", data.uid);
	});
	socket.on("file-meta",function(data){
		socket.in(data.uid).emit("fs-meta", data.metadata);
	});
	socket.on("fs-start",function(data){
		socket.in(data.uid).emit("fs-share", {});
	});
	socket.on("file-raw",function(data){
		socket.in(data.uid).emit("fs-share", data.buffer);
	})
});







const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Successfully connected to MongoDB");
        server.listen(PORT, () => {
            console.log(`Running @ ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error:", err);
    });
