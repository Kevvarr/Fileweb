const conn  = require('../db/db_connection');

// Business Logic
exports.getPath = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * from routePath';
        conn.query(sql, (err, results) => {
            if(err) return reject(err);
            resolve(results);
        })
    })
}

exports.createPath = (data) => {
    const {schemaWeb, hostWeb, pathWeb} = data
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO routePath (schemaWeb, hostWeb, pathWeb) VALUES (?, ?, ?)';
        conn.query(sql, [schemaWeb, hostWeb, pathWeb], (err, results) => {
            if(err) return reject(err);
            resolve(results);
        })
    })
}

exports.updatePath = (dataParams, dataBody) => {
    const { id } = dataParams;
    const {schemaWeb, hostWeb, pathWeb} = dataBody;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE routePath SET schemaWeb = ?, hostWeb = ?, pathWeb = ? WHERE id = ?';
        conn.query(sql, [schemaWeb, hostWeb, pathWeb, id], (err, results) => {
            if(err) return reject(err);
            resolve(results);
        })
    })
}

exports.deletePath = (dataParams) => {
    
    const { id } = dataParams;
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM routePath WHERE id = ?';
        conn.query(sql, [id], (err, results) => {
            if(err) return reject(err);
            resolve(results);
        })
    })
}
