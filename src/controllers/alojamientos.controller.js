import {pool} from '../db.js';



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
    const {alojamiento, tipo, descripcion, cdormitorios, cbaños, valoracion} = req.body
    const [rows] = await pool.query('INSERT INTO alojamientos (alojamiento, tipo, descripcion, cdormitorios, cbaños, valoracion) VALUES (?,?, ?, ?, ?, ?)' , [alojamiento, tipo, descripcion, cdormitorios, cbaños, valoracion])
    res.send({
        id: rows.insertId,
        alojamiento,
        tipo,
        descripcion,
        cdormitorios,
        cbaños,
        valoracion,
     })
}


export const updateAlojamiento = async (req, res) => {
    const {id} = req.params
    const {alojamiento, tipo, descripcion, cdormitorios, cbaños, valoracion} = req.body
    const [result] = await pool.query('UPDATE alojamientos SET alojamiento = ?, tipo = ?, descripcion = ?, cdormitorios = ?, cbaños = ?, valoracion = ? WHERE id = ?', [alojamiento, tipo, descripcion, cdormitorios, cbaños, valoracion])

    if (result.affectedRows === 0) return res.stauts(404).json ({
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