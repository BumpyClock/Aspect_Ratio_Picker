const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');
const aspectRatioButtons = document.querySelectorAll('.aspect-ratio-button');
const aspectRatioWidthInput = document.querySelector('#aspect-ratio-width');
const aspectRatioHeightInput = document.querySelector('#aspect-ratio-height');
const resetLink = document.querySelector('#reset');

// Calculate height based on default width and aspect ratio
calculateHeight();

// Event listeners for height and width inputs
heightInput.addEventListener('input', calculateWidth);
widthInput.addEventListener('input', calculateHeight);

// Event listeners for aspect ratio buttons
aspectRatioButtons.forEach(button => {
  button.addEventListener('click', setAspectRatio);
});

// Event listeners for custom aspect ratio inputs
aspectRatioWidthInput.addEventListener('input', calculateWidth);
aspectRatioHeightInput.addEventListener('input', calculateHeight);

// Event listener for reset link
resetLink.addEventListener('click', reset);

// Calculate width based on height and aspect ratio
function calculateWidth() {
  let height = heightInput.value;
  let aspectRatio = getAspectRatio();

  if (height && aspectRatio) {
    widthInput.value = height * aspectRatio[0] / aspectRatio[1];
  }
}

// Calculate height based on width and aspect ratio
function calculateHeight() {
  let width = widthInput.value;
  let aspectRatio = getAspectRatio();

  if (width && aspectRatio) {
    heightInput.value = width * aspectRatio[1] / aspectRatio[0];
  }
}

// Set aspect ratio based on clicked button
function setAspectRatio() {
  let aspectRatio = this.id.split(':');
  aspectRatioWidthInput.value = aspectRatio[0];
  aspectRatioHeightInput.value = aspectRatio[1];
  calculateWidth();
}

// Get current aspect ratio
function getAspectRatio() {
  let aspectRatioWidth = aspectRatioWidthInput.value;
  let aspectRatioHeight = aspectRatioHeightInput.value;

  if (aspectRatioWidth && aspectRatioHeight) {
    return [aspectRatioWidth, aspectRatioHeight];
  } else {
    return null;
  }
}

// Reset to initial state
function reset() {
  widthInput.value = 1920;
  heightInput.value = 0;
  aspectRatioWidthInput.value = 16;
  aspectRatioHeightInput.value = 9;
  calculateHeight();
}
