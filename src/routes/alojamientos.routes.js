import {Router} from 'express';
import {getAlojamientos, createAlojamiento, updateAlojamiento, deleteAlojamiento, getAlojamiento, getTiposdeAlojamientos, createTiposdeAlojamiento, updateTiposdeAlojamiento, deleteTiposdeAlojamiento, getServicios, createServicio} from '../controllers/alojamientos.controller.js';


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
router.put('/TiposdeAlojamiento/:idTipoAlojamiento', updateTiposdeAlojamiento)
router.delete('/TiposdeAlojamiento/:idTipoAlojamiento', deleteTiposdeAlojamiento )

// tabla Servicios
router.get('/Servicios', getServicios)
router.post('/Servicios', createServicio)
//router.put('/Servicios/:idServicio', updateServicio)
//router.delete('/Servicios/:idServicio', deleteServicio)

export default router