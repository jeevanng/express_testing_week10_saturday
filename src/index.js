// This is where we run the server


const {app, PORT, HOST} = require('./server')

app.listen(PORT, HOST, () => {
    console.log("Server is running on port" + PORT);
})