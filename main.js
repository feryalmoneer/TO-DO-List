let add=document.querySelector(".add");
add.onclick=function(e)
{
  //console.log(e.target);
 
let ele=document.querySelector(".input").value;
if(ele.trim()==='')
{
    Swal.fire(
        {
        icon: "error" ,
        title: "Oops...",
        text: "Something wrong! Please check the entered input",
      });
    }
    else
    {
        let res=`
        <li class="task">
        <input type="checkbox" onchange="updateTask(this)">
        <span >${ele}</span>
        </li>`
        document.querySelector(".list").innerHTML+=res;
    }


}

function updateTask(checkbox) 
{
   const taskText = checkbox.nextElementSibling;
   taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
}

