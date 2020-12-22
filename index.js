
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

function addLine(dataUser){
  var tr = document.createElement("tr");
  //coloca um comando html
  tr.innerHTML = `
    <tr>
      <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
      <td>${dataUser.name}</td>
      <td>${dataUser.email}</td>
      <td>${dataUser.admin}</td>
      <td>${dataUser.birth}</td>
      <td>
        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
      </td>
    </tr>
  `;
document.getElementById("table-users").appendChild(tr);

}

document.getElementById("form-user-create").addEventListener("submit", function(event){
  
  event.preventDefault();

  fields.forEach(function(field, index){ //inicia no zero
    if(field.name == "gender") {
      if(field.checked){
        user[field.name] = field.value;

      }  // ||(field.checked === true)
    
    }else{

      user[field.name] = field.value;
    }
  });

  addLine(user) // a sua função addLine tem que receber os valores dos usuarios!!
});

