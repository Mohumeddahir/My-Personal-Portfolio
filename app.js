// app.js
/*
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3002;

// Serve static files (CSS, Images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

document.addEventListener("DOMContentLoaded", () => {
  fetchProjects();
});

// Function to fetch projects from REST API
async function fetchProjects() {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"); // Mock API
      const projects = await response.json();

      // Get project container
      const projectContainer = document.getElementById("project-container");
      
      projects.forEach((project) => {
          const projectCard = document.createElement("div");
          projectCard.classList.add("project-card");
          projectCard.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.body}</p>
          `;
          projectContainer.appendChild(projectCard);
      });
  } catch (error) {
      console.error("Error fetching projects:", error);
  }
}

