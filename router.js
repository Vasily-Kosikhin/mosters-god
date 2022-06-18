import Router from 'express';
import MonsterController from './MonsterController.js';
const router = new Router();

router.get('/monsters', MonsterController.getAll);
router.post('/spawn', MonsterController.create);
router.put('/hit', MonsterController.update);
export default router;
