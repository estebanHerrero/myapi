import {Router} from 'express';
import {getAlojamientos, createAlojamiento, updateAlojamiento, deleteAlojamiento, getAlojamiento} from '../controllers/alojamientos.controller.js';

const router = Router()

router.get('/alojamientos', getAlojamientos)
router.get('/alojamientos/:id', getAlojamiento)
router.post('/alojamientos', createAlojamiento)
router.put('/alojamientos/:id', updateAlojamiento)
router.delete('/alojamientos/:id', deleteAlojamiento )


export default router