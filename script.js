//document.addEventListener("DOMContentLoaded", function() {
//    function updateStatus() {
//        fetch('/172.20.10.9/hello')
//            .then(response => response.json())
//            .then(data => {
//                const statusText = document.getElementById('statusText');
//                const statusIndicator = document.getElementById('statusIndicator');
//                const startButton = document.getElementById('startButton');
//                const stopButton = document.getElementById('stopButton');

//                statusText.textContent = data.status;
//                if (data.status === '運轉中') {
//                    statusIndicator.className = 'active';
//                    startButton.style.display = 'none';
//                    stopButton.style.display = 'block';
//                } else if (data.status === '待命') {
//                    statusIndicator.className = 'standby';
//                    startButton.style.display = 'block';
//                    stopButton.style.display = 'none';
//                } else {
//                    statusIndicator.style.display = 'none';
//                    startButton.style.display = 'none';
//                    stopButton.style.display = 'none';
//                }
//            });
//    }

//    setInterval(updateStatus, 5000);  // 每 5 秒更新狀態
//});
