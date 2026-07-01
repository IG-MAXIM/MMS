// ========== Боковая панель ==========
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// ========== Показать/скрыть блоки с кодом ==========
function toggleSolution(id, btn) {
    const block = document.getElementById(id);
    if (!block) return;

    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    const isHidden = block.style.display === 'none' || !block.style.display;

    if (isHidden) {
        block.style.display = 'block';
        btn.classList.add('active');
        if (icon) {
            icon.className = 'fas fa-' + btn.dataset.hideIcon;
        }
        if (span) {
            span.textContent = btn.dataset.hideText;
        }
    } else {
        block.style.display = 'none';
        btn.classList.remove('active');
        if (icon) {
            icon.className = 'fas fa-' + btn.dataset.showIcon;
        }
        if (span) {
            span.textContent = btn.dataset.showText;
        }
    }
}