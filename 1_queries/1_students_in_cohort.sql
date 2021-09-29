SELECT id, name
FROM students
WHERE cohort_id IS NULL
ORDER BY name;