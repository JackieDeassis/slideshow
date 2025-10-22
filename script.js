const container = document.getElementById('slideshow_container');
const slideCount = 5; // Number of slides
let currentSlide = 1;

// Fetch dog images from Dog API
async function createSlideshow() {
    const ul = document.createElement('ul');
    ul.className = 'slider';

    for (let i = 1; i <= slideCount; i++) {
        const li = document.createElement('li');

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `slide${i}`;
        input.name = 'slide';
        if (i === 1) input.checked = true;

        const label = document.createElement('label');
        label.htmlFor = `slide${i}`;

        // Fetch random dog image
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        const img = document.createElement('img');
        img.src = data.message;
        img.alt = `Dog ${i}`;

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(img);
        ul.appendChild(li);
    }

    container.appendChild(ul);
    startSlideshow();
}

// Automatic slideshow
function startSlideshow() {
    setInterval(() => {
        currentSlide++;
        if (currentSlide > slideCount) currentSlide = 1;

        const radio = document.getElementById(`slide${currentSlide}`);
        if (radio) radio.checked = true;
    }, 2000); // Change slide every 2 seconds
}

createSlideshow();
