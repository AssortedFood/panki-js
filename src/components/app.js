export function loadApp() {
  const leftHalfContent = getLeftHalfContent('https://example.com/page.html'); // Placeholder URL from SQLite
  loadLeftHalf(leftHalfContent);

  const rightHalfContent = getRightHalfContent('Some text from SQLite', 'Submit');
  updateRightHalf(rightHalfContent);
}

export function loadLeftHalf(content) {
  const leftHalf = document.getElementById('left-half');
  leftHalf.innerHTML = content;
}

export function updateRightHalf(content) {
  const rightHalf = document.getElementById('right-half');
  rightHalf.innerHTML = content;

  const submitButton = rightHalf.querySelector('button');
  submitButton.addEventListener('click', () => {
    const newRightHalfContent = getRightHalfContent('New text from SQLite', 'Back');
    updateRightHalf(newRightHalfContent);
  });
}

function getLeftHalfContent(url) {
  return `
    <iframe src="${url}" width="100%" height="100%"></iframe>
  `;
}

function getRightHalfContent(topText, buttonText) {
  return `
    <div style="height: 40%;">${topText}</div>
    <input type="text" style="height: 40%; width: 100%;" />
    <button style="width: 100%;">${buttonText}</button>
  `;
}