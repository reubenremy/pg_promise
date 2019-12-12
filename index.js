const db = require('./conn.js');

// db.query('SELECT * FROM personal')
// .then(response => 
//     response.map(each => {console.log(each.task, each.status)})
//  ); 

// db.query("INSERT INTO personal (task, status) VALUES ('pg-promise success', true) ")
//     .then(response => response.map(res => {console.log(res.task, res.status)}));

db.query("select * from development")
    .then(res => {
        // console.log(res[0]);
        // console.log(res[1]);
        // console.log(res[2]);
    });

