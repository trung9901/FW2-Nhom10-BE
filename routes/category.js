import { Router } from 'express';
import {
  list,
  post,
  read,
  remove,
  update,
  findWithProduct,
} from '../controllers/category';
import { userById } from '../controllers/user';
import {
  checkAuth,
  isAuth,
  isAdmin,
  requireSignin,
} from '../middlewares/checkAuth';
const router = Router();

router.get('/categories', list);
router.get('/categories/:id', read);
router.get('/cateproduct/:id', findWithProduct);
// router.post('/categories/:userId', requireSignin, isAuth, isAdmin, post)
// router.put('/categories/:userId/:id', requireSignin, isAuth, isAdmin, update)
// router.delete('/categories/:userId/:id', requireSignin, isAuth, isAdmin, remove)
router.post('/categories', post);
router.put('/categories/:id', update);
router.delete('/categories/:id', remove);
router.param('userId', userById);
export default router;
