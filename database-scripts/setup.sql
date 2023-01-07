CREATE TABLE weekdays (
  weekday varchar(10) NOT NULL
);


INSERT INTO weekdays (weekday) VALUES
('Monday'),
('Tuesday'),
('Wednesday'),
('Thursday'),
('Friday'),
('Saturday'),
('Sunday');

CREATE TABLE seasons (
  season varchar(10) NOT NULL
);

INSERT INTO seasons (season) VALUES
('Winter'),
('Summer'),
('Fall');

CREATE TABLE shows (
  id int NOT NULL IDENTITY(1,1),
  name varchar(75) NOT NULL,
  link varchar(100) DEFAULT NULL,
  season varchar(10) NOT NULL,
  year INT NOT NULL,
  weekday varchar(10) NOT NULL,
  completed BIT NOT NULL,
  episodeOn int DEFAULT '1',
  episodeTotal int NOT NULL,
  startDate date DEFAULT NULL,
  endDate date DEFAULT NULL,
  seasonOn int DEFAULT '1',
  PRIMARY KEY (id)
);