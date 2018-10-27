const app = require("./app");
const port = 8080;


app.set("port", port);
app.listen(port);


console.log(`Server listening on port ${port}`);
