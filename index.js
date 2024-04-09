// Example array of movie objects
const movies = [
    {
        title: "The GOAT LIFE",
        showTime: "10:15 AM",
        tickets: 150,
        imageUrl: "movie1.jpg"
        
    },
    {
        title: "PREMALU",
        showTime: "2:15 PM",
        tickets: 150,
         imageUrl: "movie2.jpg"
    },
    {
        title: "MANJUMMEL BOYS",
        showTime: "6:30 PM",
        tickets: 150,
         imageUrl: "movie3.jpg"
    },
    {
        title: "PREMALU",
        showTime: "10:30 PM",
        tickets: 150,
         imageUrl: "movie2.jpg"
    }
    // Add more movie objects as needed
];

// Add movie cards dynamically
const container = document.querySelector('.container');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = movie.imageUrl;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h2');
    title.textContent = movie.title;
    cardContent.appendChild(title);

    const showTime = document.createElement('p');
    showTime.textContent = "Show Time: " + movie.showTime;
    cardContent.appendChild(showTime);

    const tickets = document.createElement('p');
    tickets.textContent = "No.of Seats: " + movie.tickets;
    cardContent.appendChild(tickets);

    card.appendChild(cardContent);

    container.appendChild(card);
});
