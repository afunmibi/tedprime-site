function showSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
}

function hidesidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}


// form validation 

// const submitbtn = document.getElementById('submitbtn');
// const fname = document.getElementById('fname');
// const sname = document.getElementById('lname');
// const email = document.getElementById('email');

// submitbtn.addEventListener('click', function(e){
//     e.preventDefault;
//     if(fname.value.trim() === " "){
//         alert('Input your First Name');
//         fname.style.display= 'red'
//         return false; 
//     }else
//     if(lname.value.trim() === " "){
//         alert('Input your Last Name');
//         lname.style.display= 'red'
//         return false; 
//     }else
//     if(email.value.trim() === " "){
//         alert('Input your Email');
//         email.style.display= 'red'
//         return false; 
//     }
//      else{
//         alert ('your message has been recorded. Thank you')
//      }
// })