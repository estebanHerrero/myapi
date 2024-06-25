import {Router} from 'express';
import {getAlojamientos, createAlojamiento, updateAlojamiento, deleteAlojamiento, getAlojamiento, getTiposdeAlojamientos, createTiposdeAlojamiento} from '../controllers/alojamientos.controller.js';


const router = Router()


// tabla alojamientos
router.get('/alojamientos', getAlojamientos)
router.get('/alojamientos/:id', getAlojamiento)
router.post('/alojamientos', createAlojamiento)
router.put('/alojamientos/:id', updateAlojamiento)
router.delete('/alojamientos/:id', deleteAlojamiento )

// tabla TiposdeAlojamiento
router.get('/TiposdeAlojamiento', getTiposdeAlojamientos)
router.post('/TiposdeAlojamiento', createTiposdeAlojamiento)
//router.put('/TiposdeAlojamiento/:id', updateTiposdeAlojamiento)
//router.delete('/TiposdeAlojamiento/:id', deleteTiposdeAlojamiento )


export default router