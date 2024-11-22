document.addEventListener("DOMContentLoaded", () => {
    // Section Edit
    const sectionEditIcon = document.getElementById("section-edit-icon");
    const sectionEditForm = document.getElementById("section-edit-form");
    const sectionName = document.getElementById("section-name");
    const sectionNameInput = document.getElementById("section-name-input");
    const sectionCancelButton = document.getElementById("section-cancel-btn");
    const sectionSaveButton = document.getElementById("section-save-btn");

    sectionEditIcon.addEventListener("click", () => {
        sectionEditForm.style.display = "block";
    });

    sectionCancelButton.addEventListener("click", () => {
        sectionEditForm.style.display = "none";
    });

    sectionSaveButton.addEventListener("click", (e) => {
        e.preventDefault();
        const newName = sectionNameInput.value.trim();
        if (newName) {
            sectionName.textContent = newName;
        }
        sectionEditForm.style.display = "none";
    });

    // Lecture Edit
    const lectureEditIcon = document.getElementById("lecture-edit-icon");
    const lectureEditForm = document.getElementById("lecture-edit-form");
    const lectureName = document.getElementById("lecture-name");
    const lectureNameInput = document.getElementById("lecture-name-input");
    const lectureCancelButton = document.getElementById("lecture-cancel-btn");
    const lectureSaveButton = document.getElementById("lecture-save-btn");

    lectureEditIcon.addEventListener("click", () => {
        lectureEditForm.style.display = "block";
    });

    lectureCancelButton.addEventListener("click", () => {
        lectureEditForm.style.display = "none";
    });

    lectureSaveButton.addEventListener("click", (e) => {
        e.preventDefault();
        const newName = lectureNameInput.value.trim();
        if (newName) {
            lectureName.textContent = newName;
        }
        lectureEditForm.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", () => {
// Nút thêm mục
    const addItemButton = document.querySelector(".add-item-btn");
    const addContentForm = document.getElementById("add-content-form");

    addItemButton.addEventListener("click", () => {
    addContentForm.style.display = addContentForm.style.display === "none" || addContentForm.style.display === "" ? "block" : "none";
    });

//Sự kiện click cho từng lựa chọn
    // const options = document.querySelectorAll(".add-content-form .option");
    // options.forEach((option) => {
    //     option.addEventListener("click", () => {
    //         alert(`Bạn đã chọn: ${option.textContent}`);
    //         addContentForm.style.display = "none";
    //     });
    // });
});









