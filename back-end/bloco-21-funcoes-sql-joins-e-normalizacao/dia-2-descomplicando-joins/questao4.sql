SELECT t.id, t.`name`, t.location, m.title, m.director, m.`year`
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
