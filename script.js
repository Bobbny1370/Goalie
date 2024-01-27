document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.getElementById('dropdownBTN');
    var dropdownContent = document.getElementById('dropdownContent');
	var sideSelector = document.getElementById("sideSelector");
	var leftColumn = document.querySelector(".left-column");
    var rightColumn = document.querySelector(".right-column");

    // Set interval to toggle every 5 seconds (5000 milliseconds)
    setInterval(toggleSections, 5000);

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
	
	if (!sideSelector || !leftColumn || !rightColumn) {
        console.error("Dropdown or columns not found. Check your element IDs and class names.");
        return;
    }

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
	
	// Event listener for dropdown change
    function setInitialVisibility() {
        var selectedSide = sideSelector.value;

        // Hide both columns
        leftColumn.classList.remove("active");
        rightColumn.classList.remove("active");

        // Show the selected column
        if (selectedSide === "left") {
            leftColumn.classList.add("active");
        } else if (selectedSide === "right") {
            rightColumn.classList.add("active");
        }
    }

    // Event listener for dropdown change
    sideSelector.addEventListener("change", function () {
        setInitialVisibility();
    });

    // Set initial visibility on page load
    setInitialVisibility();

    console.log("JavaScript loaded successfully.");
	
});