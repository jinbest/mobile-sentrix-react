// Preloader

$(window).on('load', function () {
  setTimeout(function () {
    $('.preloader').fadeOut('slow')
  }, 10)
})

$(document).ready(function () {
  // Add scrollspy to <body>
  $('body').scrollspy({ target: '.navbar-nav', offset: 67 })

  // Add smooth scrolling on all links inside the navbar
  $('.navbar-nav .nav-link').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      )

      // Hide navbar on mobile
      $('.navbar-collapse').collapse('hide')
    } // End if
  })

})
