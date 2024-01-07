document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.getElementById('dropdownBTN');
    var dropdownContent = document.getElementById('dropdownContent');

    // Set interval to toggle every 5 seconds (5000 milliseconds)
    setInterval(toggleSections, 2500);

    dropbtn.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    dropbtn.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

    const companyName = document.getElementById('companyName');

    // Initial update on page load
    updateCompanyName();

    // Update company name when the window is resized
    window.addEventListener('resize', updateCompanyName);

    function toggleSections() {
        const contactHeader = document.getElementById('contactHeader');
        const followHeader = document.getElementById('followHeader');

        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const tiktok = document.getElementById('tiktok');
        const instagram = document.getElementById('instagram');
        const youtube = document.getElementById('youtube');

        // Toggle visibility based on the current state
        if (contactHeader.classList.contains('hidden')) {
            // Show "Contact Info" initially
            contactHeader.textContent = 'Contact Info';
            contactHeader.classList.remove('hidden');
            phone.classList.remove('hidden');
            email.classList.remove('hidden');

            followHeader.classList.add('hidden');
            tiktok.classList.add('hidden');
            instagram.classList.add('hidden');
            youtube.classList.add('hidden');
        } else {
            // Toggle visibility for "Contact Info" and "Follow Us"
            contactHeader.classList.toggle('hidden');
            phone.classList.toggle('hidden');
            email.classList.toggle('hidden');
            followHeader.classList.toggle('hidden');
            tiktok.classList.toggle('hidden');
            instagram.classList.toggle('hidden');
            youtube.classList.toggle('hidden');
        }
    }

    function updateCompanyName() {
        const screenWidth = window.innerWidth;

        // Check screen width and update company name accordingly
        if (screenWidth <= 850) {
            companyName.textContent = 'Pad Stackers'; // Update with the desired text for smaller screens
        } else {
            companyName.textContent = 'Pad Stackers - Goalie Coaching'; // Default text for larger screens
        }
    }
});