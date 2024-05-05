document.addEventListener('DOMContentLoaded', function() {
    // Hide the skills sections by default
    document.querySelectorAll('.skills').forEach(function(skills) {
        skills.classList.add('hidden');
    });

    // Add click event listeners to toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var skillType = btn.dataset.skillType;
            var skills = document.querySelector('.skills.' + skillType);
            skills.classList.toggle('hidden');
        });
    });
});
