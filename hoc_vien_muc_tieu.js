// Hàm để thêm input field vào container
function addInputField(containerId) {
  const container = document.getElementById(containerId);

  // Tạo một phần tử div mới
  const newInput = document.createElement('input');
  newInput.placeholder = "Nhập nội dung tại đây...";
  newInput.rows = 3;
  newInput.style.marginTop = "10px"; // Tạo khoảng cách giữa các input

  // Thêm input vào container
  container.appendChild(newInput);
}
