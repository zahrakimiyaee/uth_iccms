// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const tasks = [] ;
// let id =0
// let form = document.getElementById("task_form");
// let title = document.getElementById("title");
// let status = document.getElementById("status");
// let deadline = document.getElementById("deadline");
// let date = document.getElementById("date");
// let parent_tag = document.getElementById("parent_tag");
// let doing_task_0 = document.getElementById("doing_task_0");
// let title_output_0 = document.getElementById("title_output_0");
// let hour_output_0 = document.getElementById("hour_output_0");
// let date_output_0 = document.getElementById("date_output_0");
// let finished_parent_tag = document.getElementById("finished_parent_tag");
// let finished_task_0 = document.getElementById("finished_task_0");
// let finished_title_output_0 = document.getElementById("finished_title_output_0");
// let finished_hour_output_0 = document.getElementById("finished_hour_output_0");
// let finished_date_output_0 = document.getElementById("finished_date_output_0");

// function create_task(click) {
//     if(click){
//         if(form.classList.contains("d-none")){
//             form.classList.remove("d-none");
//         }
//     }
// }

// function close_task (click) {
//     let form = document.getElementById("task_form");
//     if(click){
//         form.classList.add("d-none");
//     }
// }
// /////////////add task
// const add_btn = document.getElementById("add_btn");
// const test_task =document.querySelector("#test_task");

// add_btn.addEventListener("click" , function () {
//     const parent_div = document.createElement("div");
//     parent_div.innerHTML = `
//             <div class="col col-9 mb-3 align-items-center " id="parent_tag">
//             </div>`
//     const task_titr = document.createElement("div");
//     task_titr.innerHTML = `
//                 <div class="row mb-3">
//                     <span class="col-3 fs-4 ">درحال انجام :</span>
//                 </div>`;
//     const task = document.createElement("div");
//     task.innerHTML = `<!------------ task0 ------------>
//                 <div class=" row align-items-center task-border mb-1" id="doing_task_0">
//                     <div class="col-3">
//                         <p class="fs-6" id="title_output_0"></p>
//                     </div>
//                     <div class="col-2">
//                         <div class="row g-1 mb-2 border-bottom border-success">
//                             <span class="fs-6">زمان باقیمانده :</span>
//                         </div>
//                         <p class="fs-6" id="hour_output_0">2 ساعت</p>
//                     </div>
//                     <div class="col-2">
//                         <div class="row g-1 mb-2 border-bottom border-success">
//                             <span class="fs-6">تاریخ ایجاد :</span>
//                         </div>
//                         <p class="fs-6" id="date_output_0">3/12/1414</p>
//                     </div>
//                     <div class="col col-3 btn-group ms-auto " role="group">
//                         <i class="fa-regular fa-circle-check btn btn-success" onclick="task_0_finished(click)" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="تکمیل تسک"></i>
//                         <i class="fa-regular fa-pen-to-square btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ویرایش تسک"></i>
//                         <i class="fa-regular fa-trash btn btn-danger" onclick="task_0_delete(click)" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="حذف تسک"></i>
//                     </div>
//                 </div>`       
//     test_task.appendChild(parent_div);
//     parent_div.appendChild(task_titr);
//     task_titr.append
//     form.classList.add("d-none");
// })

//////remove task


///////delete task


// function add_task(click) {

//     if(click){ if(title.value ===""|| deadline.value==="" || date.value===""){
//         alert("لطفا همه فیلد هارا پر کنید"); 
//     }else{
//         let task ={
//             id : id++,
//             a_title : title.value,
//             a_deadline : deadline.value,
//             a_date : date.value 
//             };
//             if (task.id==0) {
//                 tasks.push(task);
//                 title_output_0.innerText = task.a_title; 
//                 hour_output_0.innerText = task.a_deadline;
//                 date_output_0.innerText = task.a_date;
//                 form.classList.add("d-none"); 
//                 document.getElementById("title").value = "" ;
//                 document.getElementById("deadline").value = "" ;
//                 document.getElementById("date").value = "" ;
//                 parent_tag.classList.remove("d-none");
//                 doing_task_0.classList.remove("d-none");  
//             }
//             if (task.id==1) {
//                 tasks.push(task);
//                 title_output_1.innerText= task.a_title; 
//                 hour_output_1.innerText = task.a_deadline;
//                 date_output_1.innerText= task.a_date;
//                 form.classList.add("d-none"); 
//                 document.getElementById("title").value = "" ;
//                 document.getElementById("deadline").value = "" ;
//                 document.getElementById("date").value = "" ;
//                 parent_tag.classList.remove("d-none");
//                 doing_task_1.classList.remove("d-none");  
//             }
//             if (task.id==2) {
//                 tasks.push(task);
//                 title_output_2.innerText= task.a_title; 
//                 hour_output_2.innerText = task.a_deadline;
//                 date_output_2.innerText= task.a_date;
//                 form.classList.add("d-none"); 
//                 document.getElementById("title").value = "" ;
//                 document.getElementById("deadline").value = "" ;
//                 document.getElementById("date").value = "" ;
//                 parent_tag.classList.remove("d-none");
//                 doing_task_2.classList.remove("d-none");  
//             }
//             if (task.id==3) {
//                 tasks.push(task);
//                 title_output_3.innerText= task.a_title; 
//                 hour_output_3.innerText = task.a_deadline;
//                 date_output_3.innerText= task.a_date;
//                 form.classList.add("d-none"); 
//                 document.getElementById("title").value = "" ;
//                 document.getElementById("deadline").value = "" ;
//                 document.getElementById("date").value = "" ;
//                 parent_tag.classList.remove("d-none");
//                 doing_task_3.classList.remove("d-none");  
//             }
//             if (task.id > 3) {
//                 alert("همه تسک ها پر است!!! \n برای ایجاد تسک جدید یکی از تسک های موجود را حذف کنید.");
//             }   
//         } 
//     }
// }


// function task_0_finished (click) {
//     if(click){
//         finished_title_output_0.innerText = tasks[0].a_title;           
//         finished_hour_output_0.innerText = tasks[0].a_deadline;           
//         finished_date_output_0.innerText = tasks[0].a_date;
//         finished_parent_tag.classList.remove("d-none");
//         finished_task_0.classList.remove("d-none");
//         doing_task_0.classList.add("d-none");
//         if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }
//     }
// }

// function task_1_finished(click) {
//     if (click) {
//         finished_title_output_1.innerText = tasks[1].a_title;           
//         finished_hour_output_1.innerText = tasks[1].a_deadline;           
//         finished_date_output_1.innerText = tasks[1].a_date;
//         finished_parent_tag.classList.remove("d-none");
//         finished_task_1.classList.remove("d-none");
//         doing_task_1.classList.add("d-none");
//         if(doing_task_0.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }
//     }
// }

// function task_2_finished (click) {
//     if (click) {
//         finished_title_output_2.innerText = tasks[2].a_title;           
//         finished_hour_output_2.innerText = tasks[2].a_deadline;           
//         finished_date_output_2.innerText = tasks[2].a_date;
//         finished_parent_tag.classList.remove("d-none");
//         finished_task_2.classList.remove("d-none");
//         doing_task_2.classList.add("d-none");
//         if(doing_task_1.classList.contains("d-none") && doing_task_0.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }
//     }
// }

// function task_3_finished(click) {
//     if (click) {
//         finished_title_output_3.innerText = tasks[3].a_title;           
//         finished_hour_output_3.innerText = tasks[3].a_deadline;           
//         finished_date_output_3.innerText = tasks[3].a_date;
//         finished_parent_tag.classList.remove("d-none");
//         finished_task_3.classList.remove("d-none");
//         doing_task_3.classList.add("d-none");
//         if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_0.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }
//     }
// }

// function task_0_delete(click) {
//     if (click) {
//         tasks.splice(0, 1);
//         doing_task_0.classList.add("d-none"); 
//         if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }   
//     }
// }

// function task_1_delete(click) {
//     if (click) {
//         tasks.splice(1, 1);
//         doing_task_1.classList.add("d-none"); 
//         if(doing_task_0.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }   
//     }
// }

// function task_2_delete(click) {
//     if (click) {
//         tasks.splice(2, 1);
//         doing_task_2.classList.add("d-none");
//         if(doing_task_1.classList.contains("d-none") && doing_task_0.classList.contains("d-none") && doing_task_3.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }    
//     }
// }

// function task_3_delete(click) {
//     if (click) {
//         tasks.splice(3, 1);
//         doing_task_3.classList.add("d-none");
//         if(doing_task_1.classList.contains("d-none") && doing_task_2.classList.contains("d-none") && doing_task_0.classList.contains("d-none")){
//             parent_tag.classList.add("d-none");
//         }    
//     }
// }

// function finished_task_0_delete(click) {
//     if (click) {
//         tasks.splice(0, 1);
//         finished_task_0.classList.add("d-none");
//         if(finished_task_1.classList.contains("d-none") && finished_task_2.classList.contains("d-none") && finished_task_3.classList.contains("d-none")){
//             finished_parent_tag.classList.add("d-none");
//         }    
//     }    
// }

// function finished_task_1_delete(click) {
//     if (click) {
//         tasks.splice(1, 1);
//         finished_task_1.classList.add("d-none");
//         if(finished_task_0.classList.contains("d-none") && finished_task_2.classList.contains("d-none") && finished_task_3.classList.contains("d-none")){
//             finished_parent_tag.classList.add("d-none");
//         }    
//     }    
// }

// function finished_task_2_delete(click) {
//     if (click) {
//         tasks.splice(2, 1);
//         finished_task_2.classList.add("d-none");
//         if(finished_task_1.classList.contains("d-none") && finished_task_0.classList.contains("d-none") && finished_task_3.classList.contains("d-none")){
//             finished_parent_tag.classList.add("d-none");
//         }    
//     }    
// }

// function finished_task_3_delete(click) {
//     if (click) {
//         tasks.splice(3, 1);
//         finished_task_3.classList.add("d-none");
//         if(finished_task_1.classList.contains("d-none") && finished_task_2.classList.contains("d-none") && finished_task_0.classList.contains("d-none")){
//             finished_parent_tag.classList.add("d-none");
//         }    
//     }    
// }

/////////تمرین
////////////1
// const users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 19 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 21 }
//   ];
  
  // کدت رو اینجا بنویس
//   const find = users.find(user => user.age>18);
//   console.log(find);

  ///////2
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// کدت رو اینجا بنویس
// const find = numbers.filter(number => number%2 == 0);
// console.log(find);
///////3
// const numbers = [1, 2, 3, 4, 5];

// // کدت رو اینجا بنویس
// const mmap = numbers.map (number => number*number);
// console.log(mmap);
/////4
// const numbers = [1, 2, 3, 4, 5];

// کدت رو اینجا بنویس
// const sum = numbers.reduce ( (Number1 , Number2) => Number1+Number2 ,0);
// console.log(sum);
// /////5
// const products = [
//     { name: "Laptop", price: 1000, quantity: 5 },
//     { name: "Phone", price: 500, quantity: 15 },
//     { name: "Tablet", price: 300, quantity: 20 },
//     { name: "Headphones", price: 100, quantity: 8 }
//   ];
  
  // کدت رو اینجا بنویس
//   const fun = products.filter( product => product.quantity>10).map(product => product.price-=product.price*20/100).reduce((product1,product2) => product1+product2 , 0);
//   console.log(fun);
////
//   const totalDiscountedPrice = products
//   .filter(product => product.quantity > 10) // فیلتر محصولات با تعداد بیشتر از ۱۰
//   .map(product => product.price * 0.8) // ۲۰٪ تخفیف به قیمت
//   .reduce((acc, discountedPrice) => acc + discountedPrice, 0); // جمع قیمت‌ها

// console.log(totalDiscountedPrice); // خروجی: 640 (یعنی 400 + 240)
  
///////last one
// const words = ["apple", "banana", "cherry", "date"];

// کدت رو اینجا بنویس
// const fun = words.map(word => word.length).reduce((first,second) => first+second ,0 );
// console.log(fun);

// const totalLength = words
//   .map(word => word.length) // طول هر رشته
//   .reduce((acc, length) => acc + length, 0); // جمع طول‌ها

// console.log(totalLength); // خروجی: 20 (یعنی 5 + 6 + 6 + 3)

/////7
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// کدت رو اینجا بنویس
// const fun = numbers.filter(number => number%2==!0).map( number => number*number).reduce((first,second) => first+second , 0);
// console.log(fun);
///////8
// const students = [
//     { name: "Alice", grades: [85, 90, 78], major: "مهندسی" },
//     { name: "Bob", grades: [92, 88, 95], major: "ریاضی" },
//     { name: "Charlie", grades: [80, 85, 90], major: "مهندسی" },
//     { name: "David", grades: [70, 75, 80], major: "فیزیک" },
//     { name: "Eve", grades: [95, 93, 97], major: "مهندسی" }
//   ];
  
// کدت رو اینجا بنویس
//   const fun = students.filter(student => student.major === "مهندسی").map(student => ({
//     name : student.name,
//     avg : student.grades.reduce((first , second) => first+second , 0 ) /student.grades.length
//   })).reduce((max,current) => (current.average > max.average ? current : max));
//   console.log(fun);
//////9
// const products = [
//     { name: "Laptop", price: 100, sales: 150 },
//     { name: "Phone", price: 500, sales: 300 },
//     { name: "Tablet", price: 300, sales: 80 },
//     { name: "Headphones", price: 100, sales: 200 },
//     { name: "Monitor", price: 200, sales: 50 }
//   ];
  
// // کدت رو اینجا بنویس
// const fun = products.filter(product => product.sales > 100).map(product => ({name : product.name , money : product.price*product.sales})).reduce((max,current) => (current.money > max.money ? current : max));
// console.log(fun);
//////////OOP//////////
// class Car {
    // #mileage
//     constructor(brand,model,year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.#mileage=0;
//     }
    
//     getCarInfo(){
//         return(`برند ماشین:${this.brand} و مدل ماشین : ${this.model} و سال ساخت :${this.year}میباشد.`);
//     }

//     addmileage(km){
//         if (km > 0) {
//             this.#mileage += km;
//         } else{
//             console.log("مقدار معتبر نمیباشد.");
//         }
//     }
//     showmileage(){
//         return(this.#mileage);    
//     }
// }

// const myCar = new Car("پراید","123",1999);
// console.log(myCar.getCarInfo());
// myCar.addmileage(500);
// myCar.addmileage(500);
// myCar.addmileage(500);
// console.log(myCar.showmileage());

// class User {
//     #defult_password
//     constructor(username ,email , password) {
//         this.username = username;
//         this.email = email;
//         this.#defult_password = password;
//     }

//     showpass(){
//         return this.#defult_password
//     }
//     login(password){
//         if(password==this.#defult_password){
//             console.log("ورود موفق"); 
//         }else{
//             console.log("ورود ناموفق");  
//         }
//     }
//     changePassword(oldpass,newpass){
//         if(oldpass==!this.#defult_password){
//             return "رمزعبور نادرست است."
//         }
//         if(newpass){}
//         // if(oldpass==this.#defult_password && newpass.length>8){
//         //     this.#defult_password = newpass;
//         //     return "رمزعبور تغییر یافت"
//         // }
//     }
// }

// const user1 = new User("Ali123", "ali@example.com", "mypassword");
// console.log(user1.showpass());
// user1.login("mypassword");
// console.log(user1.changePassword("mypassword", "newPass123")); 
// user1.login("newPass123");

class Product {
    constructor(name,price,stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    getInfo(){
        return `محصول ${this.name}  قیمت ${this.price} تعداد ${this.stock}`;
    }
}

class Store {
    constructor(){
        this.product = [];
    }
    
    addProduct (product){
        this.product.push(product);
        console.log(`محصول ${product.name} به فروشگاه اضافه شد.`);
    }

    sellProduct(productName , quantity){
        if(this.product.stock = 0){
            console.log("محصول موجود نیست.");
            return;
        }
        if (this.product.stock < quantity) {
            console.log("موجودی کافی نیست."); 
        }
        this.product.stock -= quantity;
        console.log(`✅ ${quantity} عدد "${productName}" فروخته شد. (موجودی باقی‌مانده: ${this.product.stock})`);
    }
}

const store = new Store();
const laptop = new Product("لپ‌تاپ", 20000000, 10);
const phone = new Product("گوشی موبایل", 10000000, 5);

store.addProduct(laptop);
store.addProduct(phone);

store.sellProduct("لپ‌تاپ", 2);  
// ✅ 2 عدد "لپ‌تاپ" فروخته شد. (موجودی باقی‌مانده: 8)

store.sellProduct("گوشی موبایل", 6);  
// ❌ موجودی "گوشی موبایل" کافی نیست. (موجودی فعلی: 5)

store.sellProduct("تلویزیون", 1);  
// ❌ محصول "تلویزیون" در فروشگاه موجود نیست.

// const store = new Store();

// const laptop = new Product("Laptop", 20000, 10);
// const phone = new Product("Phone", 10000, 5);

// store.addProduct(laptop);
// store.addProduct(phone);
// console.log(store.addProduct(phone));



// store.sellProduct("Laptop", 2);
// store.sellProduct("Phone", 7); // پیام خطا: "موجودی کافی نیست!"


// const customer = new Product("برنج" , 1500 , 11 );
// console.log(customer.getInfo());
// const store = new Store();
// console.log(store.addProduct());
// ;
// customer.store;
// console.log(customer.addProduct);


