import { Router } from 'express';
import RecordController from '../controllers/record.controller';

const recordRouter = Router();

recordRouter.post('/', RecordController.createRecord);
recordRouter.get('/:userId', RecordController.getAllRecords);

export default recordRouter;
