const skills = [
    {id: 012345, skill: 'HTML', level: true},
    {id: 123456, skill: 'CSS', level: true},
    {id: 234567, skill: 'Javascript', level: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  function getAll() {
    return skills;
  }
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = false;
    skills.push(skills);
    // res.render('skill', {skills: skills});
  }