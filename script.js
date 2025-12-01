document.getElementById('astro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthdate = new Date(document.getElementById('birthdate').value);
    const now = new Date();
    const age = now.getFullYear() - birthdate.getFullYear();
    
    // Populate report
    document.getElementById('report-name').textContent = name;
    document.getElementById('report-age').textContent = age;
    // Calculate zodiac sign based on birthdate
    const month = birthdate.getMonth() + 1; // Months are 0-11
    const day = birthdate.getDate();
    let zodiac = '';
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = 'Aquarius';
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = 'Gemini';
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = 'Cancer';
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = 'Leo';
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = 'Virgo';
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = 'Libra';
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = 'Scorpio';
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = 'Sagittarius';
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = 'Capricorn';
    }
    else if ((month == 1 && day >= 20) || (month == 4 && day <= 26)) {
        zodiac = 'Taurus';
    }
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiac = 'Pisces';
    }
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = 'Aries';
    }
    document.getElementById('report-zodiac').textContent = zodiac;


    
    // Simulate dynamic content (in a real app, this would be API-based)
    // For static demo, we keep it generic but could randomize based on input
    document.getElementById('report').classList.remove('hidden');
    
    // Optional: Add some randomness for realism
    const colors = ['Blue', 'Green', 'Red', 'Purple'];
    const bestColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('best-color').textContent = bestColor;
});