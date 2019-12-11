const db = require('./conn.js');

db.query('SELECT * FROM personal').then(response => console.log('response from the database',response));