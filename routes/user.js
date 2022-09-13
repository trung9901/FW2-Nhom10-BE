import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/user";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/users', list)
router.get('/users/:id', read)
// router.post('/users/:userId', requireSignin, isAuth, isAdmin, post)
// router.put('/users/:userId/:id', checkAuth, update)
// router.delete('/users/:userId/:id', checkAuth, remove)
router.post('/users', post)
router.put('/users/:id', update)
router.delete('/users/:id', remove)
router.param('userId', userById)
export default router;