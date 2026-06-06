// Array to store all the paper details (Title, Subject, and PDF URL)
const allPapers = [
    { title: "2014 Dancing Paper", subject: "Dancing", url: "static/2014-dancing.pdf" },
    { title: "2017 Art Paper", subject: "Art", url: "static/2017-art.pdf" },
    { title: "2017 Mathematics Paper", subject: "Mathematics", url: "static/2017-mathematics.pdf" },
    { title: "2019 Sinhala Paper", subject: "Sinhala", url: "static/2019-sinhala.pdf" }
];

// Function to render the paper cards inside the HTML container
function displayPapers(papersArray) {
    const container = document.getElementById('papers-container');
    
    // Clear previous content in the container
    container.innerHTML = ""; 
    
    // Loop through the array and generate HTML for each card
    papersArray.forEach(paper => {
        container.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${paper.title}</h5>
                        <span class="badge bg-secondary mb-3">${paper.subject}</span>
                        <br>
                        <a href="${paper.url}" target="_blank" class="btn btn-success btn-sm w-100">Download PDF</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Function to filter papers based on the selected subject button
function filterPapers(subject) {
    // If 'All' is selected, show all papers; otherwise, filter by subject
    const filtered = (subject === 'All') 
        ? allPapers 
        : allPapers.filter(p => p.subject === subject);
        
    // Call the display function with the filtered results
    displayPapers(filtered);
}

// Event listener for the search bar functionality
document.getElementById('searchBar').addEventListener('input', function(event) {
    // Convert the typed search text to lowercase for case-insensitive matching
    const searchText = event.target.value.toLowerCase();
    
    // Filter papers where the title or subject includes the typed text
    const searchedPapers = allPapers.filter(paper => {
        return paper.title.toLowerCase().includes(searchText) || paper.subject.toLowerCase().includes(searchText);
    });

    // Call the display function with the searched results
    displayPapers(searchedPapers);
});

// Display all papers by default when the page initially loads
filterPapers('All');