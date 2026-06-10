// Sample data for movies and series
const moviesData = [
    { id: 1, title: 'Action Hero', rating: '⭐ 8.5/10', emoji: '🎬' },
    { id: 2, title: 'Love Story', rating: '⭐ 7.8/10', emoji: '💕' },
    { id: 3, title: 'Mystery Manor', rating: '⭐ 8.2/10', emoji: '🔍' },
    { id: 4, title: 'Space Adventure', rating: '⭐ 9.1/10', emoji: '🚀' },
    { id: 5, title: 'Comedy Night', rating: '⭐ 7.5/10', emoji: '😂' },
    { id: 6, title: 'Thriller Game', rating: '⭐ 8.7/10', emoji: '😱' }
];

const seriesData = [
    { id: 1, title: 'Crime Patrol', rating: '⭐ 8.9/10', emoji: '🚨' },
    { id: 2, title: 'Fantasy Quest', rating: '⭐ 9.2/10', emoji: '⚔️' },
    { id: 3, title: 'Family Drama', rating: '⭐ 8.1/10', emoji: '👨‍👩‍👧‍👦' },
    { id: 4, title: 'Tech Revolution', rating: '⭐ 8.6/10', emoji: '💻' },
    { id: 5, title: 'Historical Epic', rating: '⭐ 8.4/10', emoji: '👑' },
    { id: 6, title: 'Sci-Fi Chronicles', rating: '⭐ 9.0/10', emoji: '🛸' }
];

// Function to create content card
function createContentCard(item) {
    return `
        <div class="content-card">
            <div class="card-image">${item.emoji}</div>
            <div class="card-content">
                <div class="card-title">${item.title}</div>
                <div class="card-rating">${item.rating}</div>
            </div>
        </div>
    `;
}

// Load movies
function loadMovies() {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = moviesData.map(createContentCard).join('');
}

// Load series
function loadSeries() {
    const seriesGrid = document.getElementById('seriesGrid');
    seriesGrid.innerHTML = seriesData.map(createContentCard).join('');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu when link is clicked
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    loadSeries();
    
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on links
    document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Add click event to all content cards
    document.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('click', function() {
            alert('Coming Soon! This feature will be available soon.');
        });
    });
    
    // Sign In button
    document.querySelector('.btn-login').addEventListener('click', () => {
        alert('Sign In feature coming soon!');
    });
    
    // Start Watching button
    document.querySelector('.btn-primary').addEventListener('click', () => {
        alert('Start your streaming experience now!');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
