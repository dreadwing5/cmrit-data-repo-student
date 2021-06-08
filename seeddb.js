const mysql = require("mysql");

let seeddb = async () => {
  let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });

  let promise = new Promise((resolve, reject) => {
    let sql = "Create Database data_repository";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("DataBase Created Successfully");
      resolve("done");
    });
  });
  let res = await promise;

  promise = new Promise((resolve, reject) => {
    let db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "data_repository",
    });
    resolve(db);
  });
  db = await promise;

  /*
    Faculty Module seeding
  */

  sql =
    "Create Table faculty(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255), joiningDate Date, role varchar(255))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Faculty Table created successfully");
  });

  /*
    Student Module seeding
  */

  sql =
    "Create Table student(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Student Table created successfully");
  });

  sql =
    "Create Table awards(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255), status varchar(255), date Date, description text, COE varchar(255))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Awards Table created successfully");
  });

  sql =
    "Create Table events_attended(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), activityType varchar(255), topic varchar(255), attendedAt varchar(255), activityName varchar(255), objective text, benefits text, startDate Date, endDate Date, level varchar(255), description text, COE varchar(255),department varchar(255),filterDate Date)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Events Attended Table created successfully");
  });

  sql =
    "Create Table placement(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), studentName varchar(255), companyName varchar(255), salary int(255), date Date, driveType varchar(255), companyType varchar(255), type varchar(255), description text, filterDate Date, department varchar(255),COE varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Placements Table created successfully");
  });

  sql =
    "Create Table projects(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), type varchar(255), sem varchar(255), title varchar(255), duration varchar(255), location varchar(255), startDate date, endDate date, prize varchar(255), coe varchar(255), description varchar(255), filterDate date);";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Projects Table created successfully");
  });

  sql =
    "Create Table mooc(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), agency varchar(255), startDate Date, endDate Date, courseName varchar(225), boolExam varchar(225), department varchar(255), coe varchar(255), description varchar(255), filterDate date);";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("MOOC Table created successfully");
  });

  sql =
    "Create Table book_publication(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcid varchar(255),bookName varchar(255), publisherName varchar(255), isbn varchar(255), issue varchar(255), description varchar(225), date Date, COE varchar(255), filterDate date, doi varchar(255));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Book Publication Table created successfully");
  });

  sql =
    "Create Table journal_publications(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), name varchar(255), rcid varchar(255), pubName varchar(255), title varchar(255), isbn varchar(255), issn varchar(255), edition varchar(255), doi varchar(255), type varchar(255), coe varchar(255), description varchar(255), filterDate date);";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Journal and Conference Publications Table created successfully");
  });

  sql =
    "Create Table entrepreneurship(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcid varchar(255), companyType varchar(255),companyNameAddress varchar(225), date Date, revenue varchar(255), objectives varchar(255), benefits varchar(255), department varchar(255), COE varchar(255), description varchar(255), filterDate Date);";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Student Entrepreneurship Details Table created successfully");
  });

  sql =
    "Create Table served_as(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), collegeName varchar(255), eventName varchar(255), startDate Date, endDate Date, servedAs varchar(255), COE varchar(255), description varchar(255), filterDate Date);";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Student Served As Table created successfully");
  });

  sql =
    "Create Table parents_meeting(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), parentName varchar(255), meetingDate Date, mobNumber varchar(255), email varchar(255), address varchar(255), purpose varchar(255), description varchar(255), filterDate Date);";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Student Parents' Meeting Table created successfully");
  });

  sql = "Create Table bridge_courses(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), semester varchar(255), subName varchar(255), subCode varchar(255), topic varchar(255), sessionDate date, coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Bridge Courses Table created successfully");
  });

  sql = "Create Table idea_repository(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), ideaDate date, coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Idea Repository Table created successfully");
  });

  sql = "Create Table internship_cell(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), title varchar(255), companyName varchar(255), semester varchar(255), stipend varchar(255), duration varchar(255), startDate date, endDate date, coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Internship Cell Table created successfully");
  });

  sql = "Create Table exchange_program(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), collegeName varchar(255), programName varchar(255), startDate date, endDate date, coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Exchange Program Table created successfully");
  });

  sql = "Create Table alumni_data(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), stuName varchar(255), usn varchar(255), email varchar(255), mobNumber varchar(255), companyName varchar(255), companyEmail varchar(255), joining date, passing date, place varchar(255), location varchar(255), department varchar(255), coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Alumni Data Table created successfully");
  });

  sql = "Create Table higher_studies(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), location varchar(255), name varchar(255), universityName varchar(255), universityAddress varchar(255), admissionYear varchar(255), course varchar(255), specialization varchar(255), gradYear varchar(255), department varchar(255), examQualified varchar(255), coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Higher Studies Table created successfully");
  });

  sql = "Create Table results(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), semester varchar(255), resultDate date, academicYear varchar(255), section char(1), avgCGPA float, passPercent float, nFail int, nAppear int, nPass int, coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Results(After Reval) Table created successfully");
  });

  sql = "Create Table industry_connect(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), activityType varchar(255), topic varchar(255), attendedAt varchar(255), activityName varchar(255), objectives varchar(255), benefits varchar(255), startDate date, endDate date, activityLevel varchar(255), coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Academia/Industry Connect Activities Attended Table created successfully");
  });

  sql = "Create Table awards_nss(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), grp varchar(255), result varchar(255), awardedDate date, level varchar(255), coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Awards & Achievements NSS/NCC Table created successfully");
  });

  sql = "Create Table mentoring(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), usn varchar(255), name varchar(255), contact varchar(255), email varchar(255), parentName varchar(255), parentContact varchar(255), parentEmail varchar(255), marksIAT1 int, marksIAT2 int, marksIAT3 int, attendanceIAT1 varchar(255), attendanceIAT2 varchar(255), attendanceIAT3 varchar(255), coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Mentoring Table created successfully");
  });

  sql = "Create Table patents(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcid varchar(255), title varchar(255), agencyName varchar(255), submissionNumber varchar(255), grantAmount varchar(255), earnings varchar(255), patentNumber varchar(255), benefits varchar(255), patentLevel varchar(255), commercialized varchar(255), status varchar(255), specification varchar(255), grantDate date, submissionDate date, coe varchar(255), description varchar(255), filterDate date);"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Patents Table created successfully");
  });

  sql = "Create Table dept_list(id int Auto_increment , depname varchar(255), PRIMARY KEY(id));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Department Table Created successfully");
  });
  sql =
    "Create Table coe(id int Auto_increment, name varchar(255), PRIMARY KEY(id));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("COE table has been created sucessfully");
  });
  sql =
    "Create Table club_name(id int Auto_increment, name varchar(255), PRIMARY KEY(id));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Club name table has been created sucessfully");
  });
};

seeddb();
