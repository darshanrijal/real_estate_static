// Property data
const properties = [
  {
    id: 1,
    title: "Budhanilkantha Dream Villa",
    price: 7_500_0000,
    location: "Budhanilkantha, Kathmandu",
    bedrooms: 1,
    bathrooms: 5,
    sqft: 3200,
    type: "House",
    description:
      "Elegant 8-aana villa with marble/parquet floors, garden, parking & solar backup.",
    agentId: 1,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmhWSLWm1RWtSsg5kiLnArBwjuhfF1JTUqb9Mx",
    featured: true,
  },
  {
    id: 2,
    title: "Mahankal Modern Bungalow",
    price: 2_900_0000,
    location: "Mahankal, Kathmandu",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    type: "House",
    description:
      "2.5-storey bungalow on ~4 aana land; marble & parquet, balcony, terrace.",
    agentId: 2,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFm0hypiTjilTbJQ7E69qhjZn2Rs5y0krCVOefu",
    featured: true,
  },
  {
    id: 3,
    title: "Pasikot Residence",
    price: 6_500_0000,
    location: "Pasikot, Kathmandu",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 3300,
    type: "House",
    description:
      "Semi-furnished 2.5-storey house, north-east facing, 3-car parking.",
    agentId: 3,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmdfsi8WoNoOuAlw6XQx05MnV41ymc8zHq3khs",
    featured: true,
  },
  {
    id: 4,
    title: "Sitapaila Bungalow",
    price: 6_000_0000,
    location: "Sitapaila, Kathmandu",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3300,
    type: "House",
    description:
      "5-bed modern home on 8 aana; garden, temple space, solar, wide access road.",
    agentId: 2,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmD2kWiCJ9U5QZSTnNzk2BpFroCdE4I8YW7gGA",
    featured: false,
  },
  {
    id: 5,
    title: "Baneshwor Family House",
    price: 5_600_0000,
    location: "Baneshwor, Kathmandu",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 2800,
    type: "House",
    description:
      "Quiet residential 2.5-storey house on 6-7 aana, parking, balconies.",
    agentId: 3,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFm31DWzkpSBACDegsq4jxHYONm7Wf8EXboThzp",
    featured: false,
  },
  {
    id: 6,
    title: "Bhangal Green Villa",
    price: 4_600_0000,
    location: "Bhangal, Kathmandu",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3800,
    type: "House",
    description: "Spacious modern home in green neighbourhood, solid finishes.",
    agentId: 1,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmEt8pwz79XcyiYOTvqL2MlUzZm1xsgu8ntDAa",
    featured: false,
  },
  {
    id: 7,
    title: "Chandragiri Garden Villa",
    price: 9_000_0000,
    location: "Chandragiri, Kathmandu",
    bedrooms: 2,
    bathrooms: 4,
    sqft: 3500,
    type: "House",
    description: "Luxury villa with large garden, temple, parking & solar.",
    agentId: 1,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmDHGi24J9U5QZSTnNzk2BpFroCdE4I8YW7gGA",
    featured: true,
  },
  {
    id: 8,
    title: "Tokha Hillside House",
    price: 3_850_0000,
    location: "Tokha, Kathmandu",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2700,
    type: "House",
    description: "Quiet hillside home with terrace, parking & modern layout.",
    agentId: 2,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFm7ChoZ8ytknpsDN9B6jSL8RebgciTfOyQqrE4",
    featured: false,
  },
  {
    id: 9,
    title: "Gokarneshwor Family Home",
    price: 3_300_0000,
    location: "Gokarneshwor, Kathmandu",
    bedrooms: 2,
    bathrooms: 3,
    sqft: 2600,
    type: "House",
    description:
      "Well-built 2-storey family house, marble interiors & parking.",
    agentId: 3,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFm7ioWV6ytknpsDN9B6jSL8RebgciTfOyQqrE4",
    featured: false,
  },
  {
    id: 10,
    title: "Nagarjun Hill Villa",
    price: 3_500_0000,
    location: "Nagarjun, Kathmandu",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    type: "House",
    description: "Small hillside villa with garden and spacious living area.",
    agentId: 1,
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFm706AdYytknpsDN9B6jSL8RebgciTfOyQqrE4",
    featured: false,
  },
];

// Agents data
const agents = [
  {
    id: 1,
    name: "Durga Parsai",
    phone: "+977-98510-12345",
    email: "durga@luxurianepal.com",
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFms0aEE2Fv7JEb54uLe6BOTqHcf0mU2xyWM3Zh",
  },
  {
    id: 2,
    name: "Anil Shrestha",
    phone: "+977-98011-56789",
    email: "anil@luxurianepal.com",
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmdAVF7JRoNoOuAlw6XQx05MnV41ymc8zHq3kh",
  },
  {
    id: 3,
    name: "Sabita Gurung",
    phone: "+977-98120-90123",
    email: "sabita@luxurianepal.com",
    image:
      "https://h4423vghxx.ufs.sh/f/nFcrd5oqAIFmKjmJJRN5l9nrQESGJZ8daq2HATvwIbo3Ccmk",
  },
];

/**
 *
 * @param {number} price
 * @returns Formatted price in NPR
 */
function formatPrice(price) {
  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 *
 * @param {typeof properties[number]} property
 * @returns Generated property card HTML
 */
function createPropertyCard(property) {
  const agent = agents.find((a) => a.id === property.agentId);

  return `
                <div class="property-card">
                    ${
                      property.featured
                        ? '<div class="property-badge">Featured</div>'
                        : ""
                    }
                    <div class="property-image">
                        <img src="${property.image}" alt="${property.title}">
                        <div class="property-overlay">
                            <div class="property-price">${formatPrice(
                              property.price
                            )}</div>
                            <div class="property-address"><i class="fas fa-map-marker-alt"></i> ${
                              property.location
                            }</div>
                        </div>
                    </div>
                    <div class="property-details">
                        <h3 class="property-title">${property.title}</h3>
                        <div class="property-features">
                            <div class="feature">
                                <i class="fas fa-bed"></i>
                                <span class="feature-value">${
                                  property.bedrooms
                                }</span>
                                <span class="feature-label">Bedrooms</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-bath"></i>
                                <span class="feature-value">${
                                  property.bathrooms
                                }</span>
                                <span class="feature-label">Bathrooms</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-ruler-combined"></i>
                                <span class="feature-value">${
                                  property.sqft
                                }</span>
                                <span class="feature-label">Sq Ft</span>
                            </div>
                        </div>
                        <p class="property-description">${
                          property.description
                        }</p>
                        <div class="property-agent">
                            <div class="agent-avatar">
                                <img src="${agent.image}"  alt="${agent.name}">
                            </div>
                            <div class="agent-info">
                                <div class="agent-name">${agent.name}</div>
                                <div class="agent-phone">${agent.phone}</div>
                                <div class="agent-contact">
                                    <a href="tel:${
                                      agent.phone
                                    }" title="Call"><i class="fas fa-phone"></i></a>
                                    <a href="mailto:${
                                      agent.email
                                    }" title="Email"><i class="fas fa-envelope"></i></a>
                                    <a href="#" title="Message"><i class="fas fa-comment-dots"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}

// Filter properties based on criteria
function filterProperties() {
  const locationFilter = document.getElementById("location-filter").value;
  const bedroomsFilter = document.getElementById("bedrooms-filter").value;
  const priceFilter = document.getElementById("price-filter").value;
  const typeFilter = document.getElementById("type-filter").value;

  const filteredProperties = properties.filter((property) => {
    if (
      locationFilter !== "all" &&
      !property.location.includes(locationFilter)
    ) {
      return false;
    }

    if (
      bedroomsFilter !== "all" &&
      property.bedrooms < Number(bedroomsFilter)
    ) {
      return false;
    }

    if (priceFilter !== "all" && property.price > parseInt(priceFilter)) {
      return false;
    }

    if (typeFilter !== "all" && property.type !== typeFilter) {
      return false;
    }

    return true;
  });

  displayProperties(filteredProperties);
}

function displayProperties(propertiesToDisplay) {
  const container = document.getElementById("properties-container");

  if (propertiesToDisplay.length === 0) {
    container.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No Properties Found</h3>
                        <p>Try adjusting your filters to find what you're looking for.</p>
                    </div>
                `;
    return;
  }

  container.innerHTML = propertiesToDisplay.map(createPropertyCard).join("");
}

function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function heroSearch() {
  const query = document
    .getElementById("hero-search")
    .value.trim()
    .toLowerCase();

  const filtered = properties.filter(
    (p) =>
      p.location.toLowerCase().includes(query) ||
      p.type.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query)
  );

  displayProperties(filtered);
}

const debouncedHeroSearch = debounce(heroSearch);

function init() {
  displayProperties(properties);

  document
    .getElementById("location-filter")
    .addEventListener("change", filterProperties);
  document
    .getElementById("bedrooms-filter")
    .addEventListener("change", filterProperties);
  document
    .getElementById("price-filter")
    .addEventListener("change", filterProperties);
  document
    .getElementById("type-filter")
    .addEventListener("change", filterProperties);
}

window.addEventListener("DOMContentLoaded", init);
