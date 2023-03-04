const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill, 
    create,
    delete: deleteSkill,
    edit
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skill Details'
    });
  }
  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }
  function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }
  function edit(req, res) {
    const skill = Skill.getOne(req.perams.id);
    res.render('/skills/edit', {
      title: 'Edit Skill',
      skills
    });
  }
  function deleteSkill(req, res) {
    
    Skill.deleteOne(req.perams.id);
    res.redirect('/skills');
  }