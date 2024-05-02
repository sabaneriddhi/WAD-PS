// document.getElementById("registrationForm").
// addEventListener("submit",function(event)
// {
//     event.preventDefault();

//     const firstName =  document.getElementById("firstName").value;
//     const lastName =  document.getElementById("lastName").value;
//     const email =  document.getElementById("email").value;
//     const contact =  document.getElementById("contact").value;

//     const UserData ={
//         firstName:firstName,
//         lastName:lastName,
//         email:email,
//         contact:contact,
//     };

// let users = JSON.parse(localStorage.getItem("users")) || [] ; 

// users.push(UserData);

// localStorage.setItem("users",JSON.stringify(users));

// window.location.href ="userlist.html" ;

// });

document.getElementById('registrationForm').addEventListener('submit',function(event)
{
    event.preventDefault();

    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById('lastName').value;
    const email=document.getElementById('email').value;
    const contact=document.getElementById('contact').value;


    const UserData={

        firstName:firstName,
        lastName:lastName,
        email:email,
        contact:contact,


    };

    const users = JSON.parse(localStorage.getItem('users'))||[];

    users.push(UserData);
    localStorage.setItem('users',JSON.stringify(users));

    window.location.href='userlist.html';
});
