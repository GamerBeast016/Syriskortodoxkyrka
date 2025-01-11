
//navigation
$(function () {
    $(".toggle").on("click", function () {
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        }
        else {
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    });
});

//search bar

/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () => {
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
}
toggleSearch('search-bar', 'search-button')


// email button

document.querySelector('.footer-email-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    const emailInput = document.querySelector('.email');
    emailInput.value = ''; // Clear the email field
    alert('Email Accepted! Welcome to the Family');
});