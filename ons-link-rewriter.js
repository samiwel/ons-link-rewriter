const urlsToRewrite = [
    {
        from: /^https:\/\/collaborate2.ons.gov.uk\/confluence/,
        to: "https://confluence.ons.gov.uk"
    },
    {
        from: /^https:\/\/collaborate2.ons.gov.uk\/jira/,
        to: "https://jira.ons.gov.uk"
    },
]

urlsToRewrite.forEach(entry => {
    if (!entry.from.test( window.location.toString())) {
        return;
    }
    window.location = window.location.toString().replace(entry.from, entry.to);
})