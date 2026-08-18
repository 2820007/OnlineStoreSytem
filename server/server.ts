import "reflect-metadata";

import app from "./src/app";

import { envConfig } from "./src/config/config";
import adminSeeder from "./src/adminSeeder";

function startServer(){
    const port=envConfig.port || 9000
    adminSeeder()
    app.listen(port,()=>{
    console.log(`server has started at port ${port}`)
})


}


startServer()

