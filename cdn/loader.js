async function checkLocation() {
    const apiKey = 'YOUR_IPSTACK_API_KEY'; // Replace with your ipstack API key
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ip = ipData.ip;
    
    const locationResponse = await fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}`);
    const locationData = await locationResponse.json();
    
    if (locationData.country_code === 'US' || locationData.country_code === 'RU') {
        document.body.innerHTML = '<h1>403 Forbidden</h1>';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.body.style.textAlign = 'center';
        document.body.style.marginTop = '20%';
    }
}

window.onload = checkLocation;
