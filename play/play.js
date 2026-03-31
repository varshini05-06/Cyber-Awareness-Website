function showGame(gameId) {
  const sections = document.querySelectorAll('.game-section');
  const buttons = document.querySelectorAll('.game-buttons button');

  sections.forEach(section => {
    section.classList.remove('active');
    const iframe = section.querySelector('iframe');
    if (iframe) iframe.src = ''; 
  });
  buttons.forEach(btn => btn.classList.remove('active'));

  const activeSection = document.getElementById(gameId);
  activeSection.classList.add('active');

  const clickedButton = document.querySelector(`.game-buttons button[onclick="showGame('${gameId}')"]`);
  if (clickedButton) clickedButton.classList.add('active');

  const iframe = activeSection.querySelector('iframe');
  if (iframe && iframe.dataset.src) {
    iframe.src = iframe.dataset.src
    iframe.onload = function () {
      adjustIframeHeight(iframe);
    };
  }
}

function adjustIframeHeight(iframe) {
  try {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const iframeHeight = iframeDoc.body.scrollHeight;
    iframe.style.height = iframeHeight + "px";
  } catch (e) {
    iframe.style.height = "700px"; 
  }
}