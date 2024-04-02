document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('togglesection');
    toggleButton.addEventListener('click', function() {
        const section = document.getElementById('Work');
        //section.style.display = section.style.display == 'none' ? 'block' : 'none';
        if(section.style.display=='none')
        {
            section.style.display='block';
            toggleButton.textContent="Hide Experience"
        }
        else
        {
            section.style.display='none';
            toggleButton.textContent="Show Experience"
        }
    });

    const colorChangeButton = document.getElementById('ChangeBackgroundColor');    
    colorChangeButton.addEventListener('click', function() {
        const resume = document.getElementById('main');
        resume.style.backgroundColor = getRandomColor();
    });
    const titleInput = document.getElementById('titleInput');
    const updateTitleButton = document.getElementById('updateTitleButton');
    const resumeTitle = document.getElementById('resumeTitle');

    updateTitleButton.addEventListener('click', function() {
        const newTitle = titleInput.value.trim();
        if (newTitle !== '') {
            resumeTitle.textContent = newTitle;
            titleInput.value = ''; // Clear input field
        } else {
            alert('Please enter a valid title!');
            resumeTitle.textContent = "Bolovan Rares CV"
        }
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
    });
    } else {
    console.log("Geolocation is not supported.");
    }
});
const canvas = document.getElementById('SkillCanvas');
const ctx = canvas.getContext('2d');

const skills = [
    { topic: 'C++', level: 95 },
    { topic: 'C#', level: 85 },
    { topic: 'Java', level: 70 },
    { topic: 'HTML', level: 80 },
    { topic: 'MySQL', level: 60 }
];

function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = 50;
    const barSpacing = 20;
    const startX = 50;
    const startY = canvas.height - 50;
    const maxValue = 100;

    skills.forEach((skill, index) => {
        const barHeight = (skill.level / maxValue) * (canvas.height - 100);
        const x = startX + (index * (barWidth + barSpacing));
        const y = startY - barHeight;

        ctx.fillStyle = '#1b0094';
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(skill.topic, x + barWidth / 2, startY + 20);
    });
}
drawGraph();
