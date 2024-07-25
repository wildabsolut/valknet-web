async function checkLocation() {
    const ipResponse = await fetch('https://ipinfo.io/json?token=63f906f943f120'); // Replace with your ipinfo token
    const locationData = await ipResponse.json();
    
    if (locationData.country === 'US' || locationData.country === 'RU') {
        document.body.innerHTML = '<h1>403 Forbidden</h1>';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.body.style.textAlign = 'center';
        document.body.style.marginTop = '20%';
    }
}

window.onload = checkLocation;
