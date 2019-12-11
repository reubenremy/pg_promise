const db = require('./conn.js');

db.query('SELECT * FROM personal')
.then(response => 
    response.map(each => {console.log(each.task, each.status)})
 ); 