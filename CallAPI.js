var usersApi= 'https://reqres.in/api/users?page=2';
function start(){
    getUsers(renderUsers);
    handlecreateForm();
};
start();
//Functions
function getUsers(callback){
    fetch(usersApi)
        .then(function(response){
        return response.json();
        })
        .then(callback);
}
// function createUser(data){
//     var options={
//         method:'POST',
//         body:JSON.stringify(data)
//     };
//     fetch(usersApi,options)
//         .then(function response)
// }
function renderUsers(users){
    var listuserblock=document.querySelector('#list-users');
    var htmls =users.data.map(function(user){
        return `
        <div>
            <p>${user.id}</p>
            <p>${user.email}</p>
            <p>${user.first_name}</p>
            <p>${user.last_name}</p>
            <p><img src="${user.avatar}" alt="${user.first_name}"/></p> 
        </div>
        `;
           
    });
    listuserblock.innerHTML=htmls.join('');
    console.log(users);
     
}
function handlecreateForm(){
    var createBtn=document.querySelector('#create');
    createBtn.onclick=function(){
        var id=document.querySelector('input[name="id"]').value;
        var email=document.querySelector('input[name="email"]').value;
        var firstname=document.querySelector('input[name="firstname"]').value;
        var lastname=document.querySelector('input[name="lastname"]').value;
        var avatar=document.querySelector('input[name="avatar"]').value;
    }

}