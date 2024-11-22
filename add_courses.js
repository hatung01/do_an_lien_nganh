document.addEventListener("DOMContentLoaded", () => {
    loadCourses(); // Hiển thị khóa học đã lưu khi tải trang lần đầu
});

function loadSection(page) {
    // Sử dụng fetch để tải nội dung động
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("main").innerHTML = data; // Hiển thị nội dung lên #main
        })
        .catch(error => {
            console.error("Error loading section:", error);
            document.getElementById("main").innerHTML = `<p>Không thể tải nội dung. Vui lòng thử lại sau.</p>`;
        });
}

const modal = document.getElementById("close_add_courses");

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Hàm này được gọi khi trang được tải để hiển thị các khóa học đã lưu trữ
function loadCourses() {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseDisplay = document.getElementById("course-display");

    courseDisplay.innerHTML = ""; // Đảm bảo không bị lặp khóa học
    courses.forEach(course => {
        courseDisplay.insertAdjacentHTML("beforeend", `
            <div class="course-item">
                <h3>${course.name}</h3>
                <p><strong>Thể loại:</strong> ${course.topic}</p>
                <p><strong>Mô tả:</strong> ${course.description || "Không có mô tả"}</p>
                <div class="hover-info">
                    <a href="create_courses.html" style="text-decoration: none; color: inherit;" 
                       onclick="saveCourseToEdit('${course.name}', '${course.topic}', '${course.description || ""}')">
                        Chỉnh sửa/Quản lý khóa học
                    </a>
                </div>
            </div>
        `);
    });
}

// Lưu thông tin khóa học để chỉnh sửa vào localStorage
function saveCourseToEdit(name, topic, description) {
    const courseToEdit = { name, topic, description };
    localStorage.setItem("courseToEdit", JSON.stringify(courseToEdit));
}

// Reset form
function resetForm() {
    document.getElementById("course-name").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("course-description").value = "";
    modal.style.display = "none"; // Ẩn form
}

// Gửi form để tạo khóa học mới
function submitForm() {
    const courseName = document.getElementById("course-name").value;
    const courseTopic = document.getElementById("topic").value;
    const courseDescription = document.getElementById("course-description").value;

    if (!courseName || !courseTopic || !courseDescription) {
        alert("Vui lòng điền đầy đủ thông tin khóa học!");
        return;
    }

    const newCourse = { name: courseName, topic: courseTopic, description: courseDescription };
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));

    loadCourses(); // Tải lại danh sách khóa học
    resetForm(); // Reset form
}
