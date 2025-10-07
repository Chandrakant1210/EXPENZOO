// Animate info boxes fade-in
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.info-box');
    boxes.forEach((b, i) => {
        setTimeout(() => {
            b.style.opacity = 1;
            b.style.transform = 'translateY(0)';
        }, 300 + i * 250);
    });
});


// optional: animate reveal when cards enter viewport (requires simple intersection observer)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.post-card');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => io.observe(card));
});