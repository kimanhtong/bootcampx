const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'bootcampx'
});

let cohort = process.argv[2];
let values = [cohort];

pool.query(`
SELECT DISTINCT cohorts.name AS cohort, teachers.name AS teacher
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`, values)
.then(res => {
  res.rows.forEach(record => {
    console.log(`${record.cohort}: ${record.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));