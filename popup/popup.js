function updateDiv(){
  chrome.runtime.sendMessage({ action: "getHistory" }, function(response) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = response.msg;
  });
}

updateDiv();