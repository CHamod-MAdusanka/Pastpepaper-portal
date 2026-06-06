const allPapers = [
    { title: "2014 Dancing Paper", subject: "Dancing", url: "static/2014-dancing.pdf" },
    { title: "2017 Art Paper", subject: "Art", url: "static/2017-art.pdf" },
    { title: "2017 Mathematics Paper", subject: "Mathematics", url: "static/2017-mathematics.pdf" },
    { title: "2019 Sinhala Paper", subject: "Sinhala", url: "static/2019-sinhala.pdf" }
];

function filterPapers(subject) {
    const container = document.getElementById('papers-container');
    container.innerHTML = ""; 
    const filtered = (subject === 'All') 
        ? allPapers 
        : allPapers.filter(p => p.subject === subject);
    
    filtered.forEach(paper => {
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

filterPapers('All');