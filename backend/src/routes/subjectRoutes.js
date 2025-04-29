// backend/routes/subjectRoutes.js
const express = require('express');
const { getAllSubjects, getSubjectById, createSubject } = require('../controllers/subjectController');

const router = express.Router();

router.get('/', getAllSubjects);
router.get('/:id', getSubjectById);
router.post('/', createSubject);

module.exports = router;
