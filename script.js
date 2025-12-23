document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('mainButton');
    const status = document.getElementById('status');

    button.addEventListener('click', () => {
        status.textContent = 'Active';
        status.style.color = '#28a745';
        console.log('Button was clicked!');
        alert('App is working!');
    });
});
