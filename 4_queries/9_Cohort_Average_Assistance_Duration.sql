SELECT  SUM(total_duration)/COUNT(cohort_name) AS average_total_duration
FROM (
  SELECT cohorts.name AS cohort_name,
  SUM(completed_at - started_at) AS total_duration
  FROM assistance_requests
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  GROUP BY cohorts.id)
AS duration_per_cohort;