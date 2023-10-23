const btn = document.querySelector(".content button");
const input = document.querySelector(".content input");
const todolist = document.querySelector(".todo-list");

btn.addEventListener("click", gettodo);

function gettodo() {
  let listtodo = localStorage.getItem('listtodo') ? JSON.parse(localStorage.getItem('listtodo')) : [];
  if (input.value) {
    listtodo.unshift({
      name: input.value,
      status: false,
    },

  
    );
  }
  
  localStorage.setItem('listtodo', JSON.stringify(listtodo))
  renderTasks()
  input.value = ""
}

function renderTasks() {
  let listtodo = localStorage.getItem('listtodo') ? JSON.parse(localStorage.getItem('listtodo')) : [];

  let ul = document.querySelector(".root");
  let htmls = listtodo?.map((item, index) => {
    return ` <li class = "standard-todo light-todo darker-todo" ${item.status ? "fall" : ""}>
                <span class = "${item.status ? "completed" :""}">${item.name}</span>
               <div class = "todo-btn">
               <button class= "btn" onclick = "delet(${index})" ><i class="fas fa-trash"></i></button>
               <button class= "btn" onclick = "action(${index})" ><i class="fas fa-check"></i>'</button>
               </div>
            </li>`;
  });

  ul.innerHTML = htmls.join("");
}

(function changetheme() {
  const theme = document.querySelectorAll(".theme-selector")
    theme.forEach(item => {
      item.addEventListener("click" , function(e) {
        let getitem = e.currentTarget
         let names = getitem.classList

         const body = document.querySelector("body")
         body.classList = names[0]
      })
    })
})()
function delet(ind) {
  let listtodo = localStorage.getItem('listtodo') ? JSON.parse(localStorage.getItem('listtodo')) : [];
  listtodo.splice(ind, 1);
  localStorage.setItem('listtodo', JSON.stringify(listtodo)),
  renderTasks();
}

function action (e) {
  let listtodo = localStorage.getItem('listtodo') ? JSON.parse(localStorage.getItem('listtodo')) : [];
 listtodo[e].status = !listtodo[e].status 
 localStorage.setItem('listtodo', JSON.stringify(listtodo)),
renderTasks()
}

function checkEnter (e) {
 if(e.key === "Enter"){
  gettodo()
 }
}

(function() {
    const datetimeElement = document.querySelector("#datetime");
    
    function updateDateTime() {
        const currentDate = new Date();
        const fullDateTime = currentDate.toLocaleString();
        datetimeElement.textContent = fullDateTime;
    }

    // Gọi hàm `updateDateTime` ngay lúc ban đầu để hiển thị thời gian ban đầu.
    updateDateTime();

    // Cập nhật thời gian mỗi giây
    setInterval(updateDateTime, 1000);
})();



