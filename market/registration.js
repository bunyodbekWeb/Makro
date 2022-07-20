 let Array = JSON.parse(localStorage.getItem('users')) || [];

  function registration() {
      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value; 
      const user = document.getElementById('username').value;
      const passw = document.getElementById('psw').value;
      
          const Arrayuser = {
              firstname : firstname,
              lastname :lastname,
              user : user,
              passw : passw
           }
          const duplicateUser = Array.find((valueUser,index,array)=>{
           return  valueUser.user === user
         })
         if(duplicateUser){
             alert('bunday foydalanuvchi mavjud')
         }
         else{
             
             Array.push(Arrayuser);
             let a = Arrayuser.firstname + " " + Arrayuser.lastname;
             localStorage.setItem('name',JSON.stringify(a))  
             localStorage.setItem('users', JSON.stringify(Array));
             window.location.href = 'sessionStorage.html';
             
         }
           
      
     }
     
 document.querySelector('form').addEventListener('submit',(event)=>{
     event.preventDefault();
 })