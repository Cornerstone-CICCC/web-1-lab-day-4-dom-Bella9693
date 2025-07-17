const form = document.querySelector("form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const hireDateInput = document.getElementById("hire_date");

const fileInput = document.querySelector('input[name="photo"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = firstNameInput.value;
  const lastname = lastNameInput.value;
  const email = emailInput.value;
  const hireDate = hireDateInput.value;

  // disable form redirect
  const filename = fileInput.files[0].name;

  // Create table row
  const tr = document.createElement("tr");

  // Create td for photo
  const tdImage = document.createElement("td");
  tdImage.innerHTML = `<img src="../images/${filename}" />`;

  // Do the same for the other fields
  tr.appendChild(tdImage);

  const tdfirstname = document.createElement("td");
  tdfirstname.textContent = firstname;
  tr.appendChild(tdfirstname);

  const tdlastname = document.createElement("td");
  tdlastname.textContent = lastname;
  tr.appendChild(tdlastname);

  const tdemail = document.createElement("td");
  tdemail.textContent = email;
  tr.appendChild(tdemail);

  const tdhireDate = document.createElement("td");
  tdhireDate.textContent = hireDate;
  tr.appendChild(tdhireDate);

  const tdActions = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    const notice = confirm("Are you sure you want to delete this employee?");
    if (notice) {
      tr.remove();
    }
  });
  tdActions.appendChild(deleteBtn);
  tr.appendChild(tdActions);

  //Finally append tr to tbody
  document.querySelector("#employeeList").appendChild(tr);

  //   // employeeList에 tr 추가
  employeeList.appendChild(tr);

  //   // 폼 초기화
  form.reset();
});
