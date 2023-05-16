const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters-active')
        })
        target.classList.add('filters-active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })

        tab.classList.add('filter-tab-active')
    })
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile-border`)
sr.reveal(`.profile-name`, {delay: 500})
sr.reveal(`.profile-profession`, {delay: 600})
sr.reveal(`.profile-social`, {delay: 700})
sr.reveal(`.profile-info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile-buttons`, {delay: 800})
sr.reveal(`.filters-content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})