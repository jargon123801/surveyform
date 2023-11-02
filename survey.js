const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const popup = document.getElementById('popup');
const popupData = document.getElementById('popup-data');
const form = document.getElementById('surveyForm');

submitBtn.addEventListener('click', function() {
    if (form.checkValidity()) {
        displayPopupData();
        popup.style.display = 'block';
        form.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});

resetBtn.addEventListener('click', function() {
    form.reset();
});

function displayPopupData() {
    const formData = new FormData(form);
    let html = '<ul>';
    for (let pair of formData.entries()) {
        const label = form.querySelector(`[for="${pair[0]}"]`).textContent;
        html += `<li><strong>${label}:</strong> ${pair[1]}</li>`;
    }
    html += '</ul>';
    popupData.innerHTML = html;
}

function closePopup() {
    popup.style.display = 'none';
}