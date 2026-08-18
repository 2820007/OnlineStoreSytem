import "reflect-metadata";

import app from "./src/app";

import { envConfig } from "./src/config/config";
import adminSeeder from "./src/adminSeeder";
import categoryControllers from "./src/controllers/categoryControllers";

function startServer(){
    const port=envConfig.port || 9000
   
    app.listen(port,()=>{
        categoryControllers.seedCategory()
    console.log(`server has started at port ${port}`)
     adminSeeder()
})


}


startServer()

