document.addEventListener("DOMContentLoaded", function () {
    const dataContainer = document.getElementById('arduinoData');
    function updateStatus() {
        fetch('/172.20.10.9/hello')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();  // ┪ response.json() 狦计沮琌 JSON Α
            })
            .then(data => {
                dataContainer.innerText = data; // 穝じ陪ボ计沮
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
                dataContainer.innerText = '礚猭更计沮';
            });
    }

    setInterval(updateStatus, 5000);  // – 5 穝篈
});
