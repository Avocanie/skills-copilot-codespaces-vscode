function skillsMember() {
  var member = getMember();
  var skills = member.skills;
  var skillsList = "";
  for (var i = 0; i < skills.length; i++) {
    skillsList = skillsList + skills[i].name + ", ";
  }
  return skillsList;
}