function loadSection(section) {
    fetch(section)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            if (section === 'cau_truc_khoa_hoc.html') {
                setupDeleteButton();
            }
        })
        .catch(error => console.log('Error loading section:', error));
}

function setupDeleteButton() {
    const deleteButton = document.getElementById("deleteButton");
    if (deleteButton) {
        deleteButton.onclick = deleteCourse;
    } else {
        console.log("Không tìm thấy nút xóa.");
    }
}

function deleteCourse() {
    // Hỏi người dùng xác nhận trước khi xóa
    const isConfirmed = confirm("Bạn có chắc chắn muốn xóa khóa học này không?");
    
    if (!isConfirmed) {
        return; // Người dùng không xác nhận, dừng hàm
    }
    
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseToDelete = localStorage.getItem('courseToEdit');
    
    if (!courseToDelete) {
        alert("Không tìm thấy khóa học cần xóa.");
        return;
    }

    // Lọc bỏ khóa học cần xóa
    courses = courses.filter(course => course.name !== courseToDelete);
    localStorage.setItem("courses", JSON.stringify(courses));
    localStorage.setItem("coursesUpdated", "true");

    alert("Khóa học đã được xóa thành công!");
    window.location.href = "add_courses.html";
}
    // Lấy tất cả các mục menu
const menuItems = document.querySelectorAll('.menu-item');

    // Thêm sự kiện click vào từng mục
menuItems.forEach(item => {
item.addEventListener('click', () => {
        // Xóa class 'selected' khỏi tất cả các mục
    menuItems.forEach(menu => menu.classList.remove('selected'));
        // Thêm class 'selected' vào mục được chọn
    item.classList.add('selected');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Lấy thông tin khóa học từ localStorage
    const courseToEdit = JSON.parse(localStorage.getItem("courseToEdit"));
    if (courseToEdit) {
        // Hiển thị thông tin khóa học trên navbar
        document.querySelector(".title").textContent = courseToEdit.name;
    } else {
        document.querySelector(".title").textContent = "Khóa học không xác định";
    }
});