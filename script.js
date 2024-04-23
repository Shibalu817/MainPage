document.addEventListener("DOMContentLoaded", function () {
    const dataContainer = document.getElementById('arduinoData');
    function updateStatus() {
        fetch('/172.20.10.9/hello')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();  // �� response.json() �p�G�ƾڬO JSON �榡
            })
            .then(data => {
                dataContainer.innerText = data; // ��s�����W�������H��ܼƾ�
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
                dataContainer.innerText = '�L�k�[���ƾ�';
            });
    }

    setInterval(updateStatus, 5000);  // �C 5 ���s���A
});
