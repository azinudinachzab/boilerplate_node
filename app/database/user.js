const connection = require('./connection')
const tablename = 'user'

module.exports = {
    get_by_id: function(id, callback){
        
        let conn = connection.connect()
        conn.query('SELECT * FROM ' + tablename + ' WHERE id_user=' + id, callback)
        connection.close(conn)
    }
}