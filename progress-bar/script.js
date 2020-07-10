const progress = document.querySelector('.progress-done')

progress.style.width = progress.getAttribute('data-set') + '%'
progress.style.opacity = 1