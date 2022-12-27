const router = require('express').Router();
const { addProject, getProject, updateProject, getSingleProject, removeProject } = require('../controller/Project-controller');

router.post('/project',addProject);
router.get('/project',getProject);
router.put('/project/:id',updateProject);
router.get('/project/:id',getSingleProject);
router.delete('/project/:id',removeProject);

module.exports= router