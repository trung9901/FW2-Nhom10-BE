import { Router } from 'express';
import { create, read, remove, update, list, search } from '../controllers/new';

const router = Router();

// resful API
router.get('/news', list);
router.get('/news/:id', read);
// router.post('/news/:userId', requireSignin, isAuth, isAdmin, create);

// router.delete('/news/:userId/:id', requireSignin, isAuth, isAdmin, remove);
// router.put("/news/:userId/:id", requireSignin, isAuth, isAdmin, update)
router.post('/news', create);
router.delete('/news/:id', remove);
router.put("/news/:id", update)
router.post("/search", search)

export default router;