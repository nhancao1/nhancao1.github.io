function toggleSkills(skillType) {
    var skills = document.querySelector('.' + skillType);
    var toggleBtn = skills.previousElementSibling;

    skills.classList.toggle('hidden');
    if (skills.classList.contains('hidden')) {
        toggleBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-angle-up"></i>';
    }
}
