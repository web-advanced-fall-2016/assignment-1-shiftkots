(function() {
    let selectors = {
        itemSelector: '.navi-button',
        rootSelector: '.navigator',
        contentSelector: '.navi-content',
        titleSelector: '.navi-title'
    };
    let selectors2 = {
        itemSelector: '.hero-details',
        rootSelector: '.heroes',
        contentSelector: '.hero-intro',
        titleSelector: '.hero-name'
    };
    if (document.readyState != 'loading') {
        let accordions = new SimpleAccordion(selectors, { enabled: true, openingDuration: 50, closingDuration: 50, resolution: 5, mutualExclusive: false });
        let accordions2 = new SimpleAccordion(selectors2, { enabled: true, openingDuration: 100, closingDuration: 100, resolution: 5 });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            let accordions = new SimpleAccordion(selectors, { enabled: true, openingDuration: 50, closingDuration: 50, resolution: 5 });
            let accordions2 = new SimpleAccordion(selectors2, { enabled: true, openingDuration: 100, closingDuration: 100, resolution: 5 });
        });
    }
})();