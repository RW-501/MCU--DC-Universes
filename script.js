// Function to fetch superhero JSON data from a URL
function fetchSuperheroData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching superhero data:', error);
    });
}

// Function to dynamically populate superhero cards from JSON data
function populateSuperheroCards(superheroesData, containerId) {
  const container = document.getElementById(containerId);

  superheroesData.forEach(superhero => {
    const card = document.createElement("div");
    card.classList.add("superhero-card");

    const image = document.createElement("img");
    image.src = superhero.image;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = superhero.name;
    card.appendChild(name);

    const bio = document.createElement("p");
    bio.textContent = superhero.bio;
    card.appendChild(bio);

    const powers = document.createElement("ul");
    superhero.powers.forEach(power => {
      const powerItem = document.createElement("li");
      powerItem.textContent = power;
      powers.appendChild(powerItem);
    });
    card.appendChild(powers);

    container.appendChild(card);
  });
}

// Populate the MCU and DC superhero cards
document.addEventListener("DOMContentLoaded", function() {
  const mcuURL = 'mcu.json'; // Replace with the actual MCU JSON URL
  const dcURL = 'dc.json'; // Replace with the actual DC JSON URL

  fetchSuperheroData(mcuURL)
    .then(mcuData => {
      populateSuperheroCards(mcuData, "mcu-container");
    });

  fetchSuperheroData(dcURL)
    .then(dcData => {
      populateSuperheroCards(dcData, "dc-container");
    });
});
