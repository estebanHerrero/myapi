import {pool} from '../db.js';


// tabla alojamientos
export const getAlojamientos = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM alojamientos')
    res.json(rows)
}

export const getAlojamiento = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM  alojamientos WHERE id = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: ' Alojamiento no encontrado'
    })


    res.json(rows[0])
}



export const createAlojamiento = async (req, res) => {
    const {alojamiento, tipo, descripcion, cdormitorios, cbaños, ppdia, valoracion} = req.body
    const [rows] = await pool.query('INSERT INTO alojamientos (alojamiento, tipo, descripcion, cdormitorios, cbaños, ppdia, valoracion) VALUES (?,?, ?, ?, ?, ?, ?)' , [alojamiento, tipo, descripcion, cdormitorios, cbaños, ppdia, valoracion])
    res.send({
        id: rows.insertId,
        alojamiento,
        tipo,
        descripcion,
        cdormitorios,
        cbaños,
        ppdia,
        valoracion,
     })
}


export const updateAlojamiento = async (req, res) => {
    const {id} = req.params
    const {alojamiento, tipo, descripcion, cdormitorios, cbaños, ppdia, valoracion} = req.body
    const [result] = await pool.query('UPDATE alojamientos SET alojamiento = ?, tipo = ?, descripcion = ?, cdormitorios = ?, cbaños = ?, ppdia = ?, valoracion = ? WHERE id = ?', [alojamiento, tipo, descripcion, cdormitorios, cbaños, ppdia, valoracion, id])

    if (result.affectedRows === 0) return res.status(404).json ({
        message: 'Alojamiento no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM alojamientos WHERE id = ?', [id])

    res.json(rows[0])
}



export const deleteAlojamiento = async (req, res) => {
    const [result] = await pool.query('DELETE FROM alojamientos WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Alojamiento no encontrado'
    })

    res.sendStatus(204)
}

//tabla TiposdeAlojamiento
export const getTiposdeAlojamientos = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM TiposdeAlojamiento')
    res.json(rows)
}

export const createTiposdeAlojamiento = async (req, res) => {
    const {descripcion} = req.body
    const [rows] = await pool.query('INSERT INTO TiposdeAlojamiento (descripcion) VALUES (?)' , [descripcion])
    res.send({
        id: rows.insertId,
        descripcion,
     })
}


