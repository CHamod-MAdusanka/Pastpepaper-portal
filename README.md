# Education-portal.Github.io
# 📚 Past Papers Portal

A simple, fast, and user-friendly web portal to browse, search, and download educational past papers. 

## ✨ Features
* **Dynamic Search:** Instantly search for papers by title or subject.
* **Category Filters:** Filter past papers easily using subject buttons (e.g., Mathematics, Art, Dancing).
* **Direct Downloads:** One-click download/view for PDF files.
* **Responsive Design:** Clean and modern UI built with Bootstrap 5.

## 🛠️ Technologies Used
* **HTML5**
* **CSS3** (Bootstrap 5 via CDN & Custom CSS)
* **JavaScript** (Vanilla JS for dynamic rendering, searching, and filtering)

## 📂 Folder Structure
\`\`\`text
#  ── css/
# │   └── style.css          # Custom styling
# ├── static/                # Directory containing all the PDF files
# │   ├── 2014-dancing.pdf
# │   ├── 2017-art.pdf
# │   ├── 2017-mathematics.pdf
# │   └── 2019-sinhala.pdf
# ├── index.html             # Main HTML layout
# ├── app.js                 # Core JavaScript logic
# └── README.md              # Project documentation
\`\`\`

## 🚀 How to Run Locally
1. Clone this repository or download the ZIP file.
2. Make sure all your PDF files are placed inside the `static/` folder.
3. Open `index.html` in your favorite web browser.
4. You are good to go!

## 📝 How to Add New Papers
To add a new past paper to the portal, follow these two simple steps:

1. Place the new PDF file inside the `static/` folder.
2. Open `app.js` and add a new entry to the `allPapers` array like this:
\`\`\`javascript
{ title: "2020 Science Paper", subject: "Science", url: "static/2020-science.pdf" }
\`\`\`

---
*Built with ❤️ for educational purposes.*