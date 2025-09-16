document.addEventListener('DOMContentLoaded', function() {
    const projects1 = [
        { title: "Child Educations", category: "Charity & Funding", image: "../img/event1.jpg" },
        { title: "Clean Water Initiative", category: "Environment", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Medical Aid Program", category: "Healthcare", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Food Relief Campaign", category: "Humanitarian", image: "../img/event2.jpg" },
        { title: "Wildlife Conservation", category: "Environment", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }


    ];

    const projects2 = [
        { title: "Education for All", category: "Charity & Funding", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Disaster Relief", category: "Emergency Response", image: "../img/event1.jpg" },
        { title: "Women Empowerment", category: "Social Development", image: "../img/event2.jpg" },
        { title: "Rural Development", category: "Community Building", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { title: "Running", category: "10k Run", image: "../img/event3.jpg" }


    ];

    function createProjectCard(project) {
        return `
            <div class="home_donate_evnt_project-card">
                <div class="home_donate_evnt_project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="home_donate_evnt_shape-image"></div>
                    <div class="home_donate_evnt_project-content">
                        <div class="home_donate_evnt_content">
                            <h3><a href="#">${project.title}</a></h3>
                            <h5>${project.category}</h5>
                        </div>
                        <a href="#" class="home_donate_evnt_arrow-icon"><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        `;
    }

    const carousel1 = document.getElementById('carousel1');
    let carousel1HTML = '';
    projects1.forEach(project => { carousel1HTML += createProjectCard(project); });
    projects1.forEach(project => { carousel1HTML += createProjectCard(project); });
    carousel1.innerHTML = carousel1HTML;

    const carousel2 = document.getElementById('carousel2');
    let carousel2HTML = '';
    projects2.forEach(project => { carousel2HTML += createProjectCard(project); });
    projects2.forEach(project => { carousel2HTML += createProjectCard(project); });
    carousel2.innerHTML = carousel2HTML;

    const carousels = document.querySelectorAll('.home_donate_evnt_carousel-track, .home_donate_evnt_carousel-track-reverse');
    carousels.forEach(carousel => {
        carousel.addEventListener('mouseenter', function() { this.style.animationPlayState = 'paused'; });
        carousel.addEventListener('mouseleave', function() { this.style.animationPlayState = 'running'; });
    });
});
