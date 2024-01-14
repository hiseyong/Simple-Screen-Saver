function getQuote() {
    const quote = document.getElementById('quote');
    let quoteText = '';
    fetch('https://api.api-ninjas.com/v1/quotes?category=life', {
        headers: {
            'X-Api-Key': 'SFST+g0CFfoWMHVioaJRUw==f7hARzwOmrkWgqfM'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Process the response data here
            console.log(data[0].quote);
            quoteText = `${data[0].quote} - ${data[0].author}`;
            quote.textContent = quoteText;
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', getQuote);