// const addForm = document.querySelector(".addForm");

// function addLost(event) {
//     event.preventfault();

//     var registrant = addForm.registrant.value;
//     var where = addForm.where.value;
//     var name = addForm.name.value;
//     var who = addForm.who.value;
//     var call = addForm.call.value;

//     var tr = document.createElement('tr');

//     var td1 = tr.appendChild(document.createElement('td'));
//     var td2 = tr.appendChild(document.createElement('td'));
//     var td3 = tr.appendChild(document.createElement('td'));
//     var td4 = tr.appendChild(document.createElement('td'));
//     var td5 = tr.appendChild(document.createElement('td'));

//     td1.innerHTML = registrant;
//     td2.innerHTML = where;
//     td3.innerHTML = name;
//     td4.innerHTML = who;
//     td5.innerHTML = call;

//     document.getElementById("table").appendChild(tr);
// }

// addForm.addEventListener("onclick", addLost);

// let btnAdd = document.querySelector('.add_new');
// let table = document.querySelector('#table');
// let tbody = document.querySelector('tbody');


// btnAdd.addEventListener('click', (event) => {
//     event.preventDefault();

//     let input_registrant = document.querySelector('.registrant');
//     let input_where = document.querySelector('.where');
//     let input_name = document.querySelector('.name');
//     let input_who = document.querySelector('.who');
//     let input_call = document.querySelector('.call');

//     let row = table.insertRow(-1);

//     let c_registant = row.insertCell(0);
//     let c_where = row.insertCell(1);
//     let c_namet = row.insertCell(2);
//     let c_who = row.insertCell(3);
//     let c_call = row.insertCell(4);

//     let registrant = input_registrant.value;
//     let where = input_where.value;
//     let name = input_name.value;
//     let who = input_who.value;
//     let call = input_call.value;

//     c_registant.ineerText = `${registrant}`;
//     c_where.ineerText = `${where}`;
//     c_namet.ineerText = `${name}`;
//     c_who.ineerText = `${who}`;
//     c_call.ineerText = `${call}`;


    // let template = `
    //             <tr>
    //                 <td>12</td>
    //                 <td>${registrant}</td>
    //                 <td>${where}</td>
    //                 <td>${name}</td>
    //                 <td>${who}</td>
    //                 <td>${call}</td>
    //                 <td>
    //                     <button><i class="fa-solid fa-pen-to-square"></i></button>
    //                     <button><i class="fa-solid fa-handshake"></i></button>
    //                     <button><i class="fa-solid fa-train"></i></button>
    //                     <button><i class="fa-solid fa-building-shield"></i></button>           
    //                     <button><i class="fa-solid fa-x"></i></button>                        
    //                 </td>                        
    //             </tr>`;
    // tbody.innerHTML += template;

    function addLost() {
        // 오늘 날짜
        let today = new Date();
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();
        let day = month + '/' + date;

        // 처리 버튼
        let btn1 = document.createElement("button");
        let i1 = document.createElement("i");
        i1.className = "fa-solid fa-pen-to-square";
        btn1.append(i1);
        let btn2 = document.createElement("button");
        let i2 = document.createElement("i");
        i2.className = "fa-solid fa-handshake";
        btn2.append(i2);
        let btn3 = document.createElement("button");
        let i3 = document.createElement("i");
        i3.className = "fa-solid fa-train";
        btn3.append(i3);
        let btn4 = document.createElement("button");
        let i4 = document.createElement("i");
        i4.className = "fa-solid fa-building-shield";
        btn4.append(i4);
        let btn5 = document.createElement("button");
        let i5 = document.createElement("i");
        i5.className = "fa-solid fa-x";
        btn5.append(i5);

        // 입력된 값을 가져옴
        let registrantValue = document.querySelector(".registrant").value;
        console.log(registrantValue);
        let whereValue = document.querySelector(".where").value;
        let nameValue = document.querySelector(".name").value;
        let whoValue = document.querySelector(".who").value;
        let callValue = document.querySelector(".call").value;
        let storageLocationValue = document.querySelector(".storageLocation").value;
    
        // 표에 행을 추가
        const table = document.getElementById("table");
        let newRow = table.insertRow();
        let cells = [day, registrantValue, whereValue, nameValue, whoValue, callValue, storageLocationValue];
        
        for (var i = 0; i < cells.length; i++) {
            var cell = newRow.insertCell(i);
            cell.innerText = cells[i];
        }
        newRow.insertCell(cells.length).append(btn1, btn2, btn3, btn4, btn5);
    
        // 입력 필드를 초기화
        document.getElementsByClassName("registrant").value = "";
        document.getElementsByClassName("where").value = "";
        document.getElementsByClassName("name").value = "";
        document.getElementsByClassName("who").value = "";
        document.getElementsByClassName("call").value = "";
    }
    