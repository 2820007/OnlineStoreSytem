import express,{Router} from "express"
import categoryControllers from "../controllers/categoryControllers"
import userMiddleware, { Role } from "../middleware/userMiddleware"
import errorHandler from './../services/errorHandler';
const router:Router=express.Router()

router.route("/").get(categoryControllers.getCategories).post(userMiddleware.isUserLoggedIn,userMiddleware.accessTo(Role.Admin),errorHandler(categoryControllers.addCategory))
router.route("/:id").patch(categoryControllers.updateCategories).delete(userMiddleware.isUserLoggedIn,userMiddleware.accessTo(Role.Admin),errorHandler(categoryControllers.deleteCategories))

export default router