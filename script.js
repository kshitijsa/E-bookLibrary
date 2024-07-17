document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch books from Google Books API
    function fetchBooks(query) {
        const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Books data:', data); 
                const books = data.items || []; 

                const container = document.getElementById('box3-part1');
                container.innerHTML = ''; // Clear existing content

                books.forEach(book => {
                    const volumeInfo = book.volumeInfo;
                    const part1 = document.createElement('div');
                    part1.className = 'part1';

                    part1.innerHTML = `
                        <div class="image-con">
                            <img src="${volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}" alt="${volumeInfo.title}">
                        </div>
                        <div class="information">
                            <h4>${volumeInfo.title}</h4>
                            <p>Author: ${volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
                            <p>Language: ${volumeInfo.language || 'Unknown'}</p>
                            <p>Genres: ${volumeInfo.categories ? volumeInfo.categories.join(', ') : 'Unknown'}</p>
                        </div>
                        <div class="heart-img"><i class="ri-service-fill"></i></div>
                    `;
                    
                    container.appendChild(part1);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Function to handle rotating text
    function rotated_string() {
        var element = document.querySelector("#target");
        var textNode = element.childNodes[0];
        var text = textNode.data;

        setInterval(function(){
            text = text[text.length - 1] + text.substring(0, text.length - 1);
            textNode.data = text;
        }, 200);
    }
    rotated_string();

    // Dropdown menu functionality
    function dropDownButton() {
        const hamburgerMenu = document.getElementById("hamburgerMenu");
        const dropdown = document.getElementById("dropdown");

        hamburgerMenu.addEventListener("click", function() {
            dropdown.classList.toggle("show");
        });

        document.addEventListener("click", function(event) {
            if (!hamburgerMenu.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
    }
    dropDownButton();

    fetchBooks('Harry potter'); 

    document.getElementById('storyBooksMenu').addEventListener('click', function() {
        fetchBooks('Story Books'); 
    });

    document.getElementById('horrorMenu').addEventListener('click', function() {
        fetchBooks('Horror Books'); 
    });

    document.getElementById('mysteryMenu').addEventListener('click', function() {
        fetchBooks('Mystery Books'); 
    });

    document.getElementById('fantasyMenu').addEventListener('click', function() {
        fetchBooks('Fantasy Books'); 
    });

    document.getElementById('fictionMenu').addEventListener('click', function() {
        fetchBooks('Fiction Books'); 
    });
});

// for sign up or log in button
function sign_upButton() {
    var signUp = document.querySelector("#sign-up");
    var iconbtn = document.querySelector(".first-icon");
    var loginbtn = document.querySelector(".loginbtn");
    var container=document.querySelector(".container");
    
    loginbtn.classList.add('show-signup');
    signUp.classList.add('show-signup');

    iconbtn.addEventListener('click', function() {
        signUp.classList.remove('show-signup');
    });
}


