let mysql = require("mysql")
let pool = mysql.createPool({
    user:'root',
    password:'root',
    host:'127.0.0.1',
    database: 'sign',
    port:3306,
    connectionLimit: 100
})


function query(sql, arr, ck) {

    arr = arr || [];

    pool.getConnection(function(err, con) {
        if (err) {
            console.log('11111')
            return ck && ck(err);
        }
        con.query(sql, arr, function(err, result, filed) {
            if (err) {
                return ck && ck(err);
            }
            ck && ck(null, result, filed);
            con.release();
        })
    })
}
module.exports = query;