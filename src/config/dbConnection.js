const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'bg24zbi6om1uyuwck4bb-mysql.services.clever-cloud.com',
        user: 'ujavki3umawfrbz0',
        password: 'oje8lzezlrEriaqjTskP',
        database: 'bg24zbi6om1uyuwck4bb'
    });
}
