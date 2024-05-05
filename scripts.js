function toggleSkills(category) {
    var skills = document.querySelectorAll('.skills.' + category);
    skills.forEach(function(skill) {
        if (skill.style.display === 'none') {
            skill.style.display = 'block';
        } else {
            skill.style.display = 'none';
        }
    });
}
