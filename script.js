document.getElementById('upload').addEventListener('change', function() {
  const files = Array.from(this.files);
  const fileList = document.getElementById('uploaded-files');
  fileList.innerHTML = "<strong>Uploaded Files:</strong><br>";
  files.forEach(file => {
    fileList.innerHTML += `${file.name}<br>`;
  });
});