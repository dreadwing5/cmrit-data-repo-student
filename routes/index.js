const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../configs/auth");
const multer = require("multer");

router.get("/", ensureAuthenticated, (req, res) => {
  res.render("home", {
    Username: req.user.name,
  });
});

//Faculty Routes

router.get("/faculty/eventsAttended", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_eventsAttended", {
    title: "Events",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Club Activities Page
router.get("/faculty/clubActivities", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_clubActivities", {
    title: "Club",
    module: "Faculty",
    Username: req.user.name,
  });
});

// Faculty Awards Page
router.get("/faculty/awards", ensureAuthenticated, (req, res) => {
  res.render("fields/fac_awards", {
    title: "Awards",
    module: "Faculty",
    Username: req.user.name,
  });
});

//Student Routes

router.get("/students/eventsAttended", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_eventsAttended", {
    title: "Events",
    module: "Student",
    Username: req.user.name,
  });
});

router.get("/students/awards", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_awards", {
    title: "Awards",
    module: "Student",
    Username: req.user.name,
  });
});

router.get("/students/placement", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_placement", {
    title: "Placement",
    module: "Student",
    Username: req.user.name,
  });
});

router.get("/students/publication", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_bookPublication", {
    title: "Book Publication",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/projects", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_projects", {
    title: "Projects/Mini Projects",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/entrepreneurship", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_entrepreneurship", {
    title: "Entrepreneurship Details",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/servedAs", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_servedAs", {
    title: "Served As",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/parentsMeeting", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_parentsMeeting", {
    title: "Parents' Meeting",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/bridgeCourses", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_bridgeCourses", {
    title: "Bridge Courses",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/ideaRepository", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_ideaRepository", {
    title: "Idea Repository",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/internshipCell", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_internshipCell", {
    title: "Internship Cell",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/exchangeProgram", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_exchangeProgram", {
    title: "Exchange Program",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/alumniData", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_alumniData", {
    title: "Alumni Data",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/higherStudies", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_higherStudies", {
    title: "Higher Studies",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/results", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_results", {
    title: "Results (After Reval)",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/journalPublications", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_journalPublications", {
    title: "Journal and Conference Publications",
    module: "Student",
    Username: req.user.name
  });
});

router.get("/students/mooc", ensureAuthenticated, (req, res) => {
  res.render("fields/stu_mooc", {
    title: "MOOC",
    module: "Student",
    Username: req.user.name
  });
});


/* //For later use, where we need to make our own api for image upload
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("file"); */

module.exports = router;
