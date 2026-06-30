CREATE DATABASE CommunityEventPortal;

USE CommunityEventPortal;

-- =========================================
-- CREATE DATABASE
-- =========================================

CREATE DATABASE IF NOT EXISTS CommunityEventPortal;

USE CommunityEventPortal;

-- =========================================
-- USERS TABLE
-- =========================================

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    registration_date DATE NOT NULL
);

-- =========================================
-- EVENTS TABLE
-- =========================================

CREATE TABLE Events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    city VARCHAR(100) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    status ENUM('upcoming','completed','cancelled'),
    organizer_id INT,
    FOREIGN KEY (organizer_id)
        REFERENCES Users(user_id)
);

-- =========================================
-- SESSIONS TABLE
-- =========================================

CREATE TABLE Sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    title VARCHAR(200) NOT NULL,
    speaker_name VARCHAR(100) NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    FOREIGN KEY (event_id)
        REFERENCES Events(event_id)
);

-- =========================================
-- REGISTRATIONS TABLE
-- =========================================

CREATE TABLE Registrations (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    registration_date DATE NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES Users(user_id),
    FOREIGN KEY (event_id)
        REFERENCES Events(event_id)
);

-- =========================================
-- FEEDBACK TABLE
-- =========================================

CREATE TABLE Feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comments TEXT,
    feedback_date DATE NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES Users(user_id),
    FOREIGN KEY (event_id)
        REFERENCES Events(event_id)
);

-- =========================================
-- RESOURCES TABLE
-- =========================================

CREATE TABLE Resources (
    resource_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    resource_type ENUM('pdf','image','link'),
    resource_url VARCHAR(255) NOT NULL,
    uploaded_at DATETIME NOT NULL,
    FOREIGN KEY (event_id)
        REFERENCES Events(event_id)
);

show tables;

-- =========================================
-- EXERCISE 1 : USER UPCOMING EVENTS
-- =========================================

SELECT
    u.full_name,
    e.title,
    e.city,
    e.start_date
FROM Users u
JOIN Registrations r
    ON u.user_id = r.user_id
JOIN Events e
    ON r.event_id = e.event_id
WHERE e.status = 'upcoming'
  AND u.city = e.city
ORDER BY e.start_date;


-- =========================================
-- EXERCISE 2 : TOP RATED EVENTS
-- =========================================

SELECT
    e.event_id,
    e.title,
    AVG(f.rating) AS avg_rating,
    COUNT(f.feedback_id) AS total_feedbacks
FROM Events e
JOIN Feedback f
    ON e.event_id = f.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC;


-- =========================================
-- EXERCISE 3 : INACTIVE USERS
-- =========================================

SELECT *
FROM Users u
WHERE u.user_id NOT IN (
    SELECT DISTINCT user_id
    FROM Registrations
    WHERE registration_date >= CURDATE() - INTERVAL 90 DAY
);


-- =========================================
-- EXERCISE 4 : PEAK SESSION HOURS
-- =========================================

SELECT
    e.title,
    COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s
    ON e.event_id = s.event_id
WHERE TIME(s.start_time)
      BETWEEN '10:00:00' AND '12:00:00'
GROUP BY e.title;


-- =========================================
-- EXERCISE 5 : MOST ACTIVE CITIES
-- =========================================

SELECT
    u.city,
    COUNT(DISTINCT r.user_id) AS registrations
FROM Users u
JOIN Registrations r
    ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY registrations DESC
LIMIT 5;


-- =========================================
-- EXERCISE 6 : EVENT RESOURCE SUMMARY
-- =========================================

SELECT
    e.title,
    COUNT(res.resource_id) AS total_resources
FROM Events e
LEFT JOIN Resources res
    ON e.event_id = res.event_id
GROUP BY e.event_id, e.title;


-- =========================================
-- EXERCISE 7 : LOW FEEDBACK ALERTS
-- =========================================

SELECT
    u.full_name,
    e.title,
    f.rating,
    f.comments
FROM Feedback f
JOIN Users u
    ON f.user_id = u.user_id
JOIN Events e
    ON f.event_id = e.event_id
WHERE f.rating < 3;


-- =========================================
-- EXERCISE 8 : SESSIONS PER UPCOMING EVENT
-- =========================================

SELECT
    e.title,
    COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s
    ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;


-- =========================================
-- EXERCISE 9 : ORGANIZER EVENT SUMMARY
-- =========================================

SELECT
    u.full_name,
    e.status,
    COUNT(e.event_id) AS total_events
FROM Users u
JOIN Events e
    ON u.user_id = e.organizer_id
GROUP BY u.full_name, e.status;


-- =========================================
-- EXERCISE 10 : FEEDBACK GAP
-- =========================================

SELECT DISTINCT
    e.event_id,
    e.title
FROM Events e
JOIN Registrations r
    ON e.event_id = r.event_id
LEFT JOIN Feedback f
    ON e.event_id = f.event_id
WHERE f.feedback_id IS NULL;


-- =========================================
-- EXERCISE 11 : DAILY NEW USER COUNT
-- =========================================

SELECT
    registration_date,
    COUNT(*) AS user_count
FROM Users
WHERE registration_date >=
      CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date;


-- =========================================
-- EXERCISE 12 : EVENT WITH MAXIMUM SESSIONS
-- =========================================

SELECT
    e.title,
    COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s
    ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) =
(
    SELECT MAX(total_sessions)
    FROM
    (
        SELECT COUNT(*) AS total_sessions
        FROM Sessions
        GROUP BY event_id
    ) x
);


-- =========================================
-- EXERCISE 13 : AVERAGE RATING PER CITY
-- =========================================

SELECT
    e.city,
    AVG(f.rating) AS avg_rating
FROM Events e
JOIN Feedback f
    ON e.event_id = f.event_id
GROUP BY e.city;


-- =========================================
-- EXERCISE 14 : MOST REGISTERED EVENTS
-- =========================================

SELECT
    e.title,
    COUNT(r.registration_id) AS registrations
FROM Events e
JOIN Registrations r
    ON e.event_id = r.event_id
GROUP BY e.event_id, e.title
ORDER BY registrations DESC
LIMIT 3;


-- =========================================
-- EXERCISE 15 : EVENT SESSION TIME CONFLICT
-- =========================================

SELECT
    s1.event_id,
    s1.title AS session1,
    s2.title AS session2
FROM Sessions s1
JOIN Sessions s2
ON s1.event_id = s2.event_id
AND s1.session_id < s2.session_id
AND s1.start_time < s2.end_time
AND s1.end_time > s2.start_time;


-- =========================================
-- EXERCISE 16 : UNREGISTERED ACTIVE USERS
-- =========================================

SELECT *
FROM Users u
WHERE u.registration_date >=
      CURDATE() - INTERVAL 30 DAY
AND NOT EXISTS
(
    SELECT 1
    FROM Registrations r
    WHERE r.user_id = u.user_id
);


-- =========================================
-- EXERCISE 17 : MULTI SESSION SPEAKERS
-- =========================================

SELECT
    speaker_name,
    COUNT(*) AS session_count
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*) > 1;


-- =========================================
-- EXERCISE 18 : RESOURCE AVAILABILITY CHECK
-- =========================================

SELECT
    e.event_id,
    e.title
FROM Events e
LEFT JOIN Resources r
    ON e.event_id = r.event_id
WHERE r.resource_id IS NULL;


-- =========================================
-- EXERCISE 19 : COMPLETED EVENTS WITH
-- FEEDBACK SUMMARY
-- =========================================

SELECT
    e.title,
    COUNT(DISTINCT r.registration_id)
        AS total_registrations,
    AVG(f.rating) AS avg_rating
FROM Events e
LEFT JOIN Registrations r
    ON e.event_id = r.event_id
LEFT JOIN Feedback f
    ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title;


-- =========================================
-- EXERCISE 20 : USER ENGAGEMENT INDEX
-- =========================================

SELECT
    u.full_name,
    COUNT(DISTINCT r.event_id)
        AS events_attended,
    COUNT(DISTINCT f.feedback_id)
        AS feedbacks_given
FROM Users u
LEFT JOIN Registrations r
    ON u.user_id = r.user_id
LEFT JOIN Feedback f
    ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name;


-- =========================================
-- EXERCISE 21 : TOP FEEDBACK PROVIDERS
-- =========================================

SELECT
    u.full_name,
    COUNT(f.feedback_id)
        AS feedback_count
FROM Users u
JOIN Feedback f
    ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_count DESC
LIMIT 5;


-- =========================================
-- EXERCISE 22 : DUPLICATE REGISTRATIONS CHECK
-- =========================================

SELECT
    user_id,
    event_id,
    COUNT(*) AS duplicates
FROM Registrations
GROUP BY user_id, event_id
HAVING COUNT(*) > 1;


-- =========================================
-- EXERCISE 23 : REGISTRATION TRENDS
-- =========================================

SELECT
    DATE_FORMAT(
        registration_date,
        '%Y-%m'
    ) AS month,
    COUNT(*) AS registrations
FROM Registrations
GROUP BY DATE_FORMAT(
         registration_date,
         '%Y-%m'
)
ORDER BY month;


-- =========================================
-- EXERCISE 24 : AVERAGE SESSION DURATION
-- PER EVENT
-- =========================================

SELECT
    e.title,
    AVG(
        TIMESTAMPDIFF(
            MINUTE,
            s.start_time,
            s.end_time
        )
    ) AS avg_duration_minutes
FROM Events e
JOIN Sessions s
    ON e.event_id = s.event_id
GROUP BY e.event_id, e.title;


-- =========================================
-- EXERCISE 25 : EVENTS WITHOUT SESSIONS
-- =========================================

SELECT
    e.event_id,
    e.title
FROM Events e
LEFT JOIN Sessions s
    ON e.event_id = s.event_id
WHERE s.session_id IS NULL;