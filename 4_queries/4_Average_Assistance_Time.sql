SELECT SUM(completed_at - started_at)/COUNT(id) AS average_assistance_request_duration
FROM assistance_requests;