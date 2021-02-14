let key_value;
let newdiv;
let del_btn;
if(localStorage.length!=0)
{
    for (let a = 0; a < localStorage.length; a++)
    {
        key_value=localStorage.getItem(a);
        showdiv();
    }
}

function creatediv()
{ 
    wrapper=document.createElement('div');
    wrapper.style.display='inline-block';
    wrapper.style.height='220px';
    wrapper.style.width='310px';
    wrapper.style.margin='5px';
    wrapper.style.border='2px solid black';
    newdiv=document.createElement('div');
    newdiv.style.display='inline-block';
    newdiv.style.overflow='auto';
    newdiv.style.height='180px';
    newdiv.style.width='300px';
    newdiv.style.border='2px solid red';
    del_btn=document.createElement("button");
    del_btn.className='delete';
    del_btn.style.display='block';
    del_btn.style.height='25px';
    del_btn.style.width='300px';
    del_btn.innerText='Delete Note';
}
function showdiv()
{
    creatediv();
    newdiv.innerText=key_value;
    putdiv=document.querySelector('.container');
    putdiv.appendChild(wrapper);
    wrapper.appendChild(newdiv);
    wrapper.appendChild(del_btn);
}
function addnote()
{
    creatediv();
    let userinput;
    let putdiv;
    userinput=document.querySelector('textarea');
    newdiv.innerText=userinput.value;
    console.log(newdiv.innerText);
    putdiv=document.querySelector('.container');
    putdiv.appendChild(wrapper);
    wrapper.appendChild(newdiv);
    wrapper.appendChild(del_btn);
    for (let i = 0; i < document.querySelector('.container').children.length; i++)
    {
        key=i;
        let notes=document.querySelector('.container').children[i].firstChild.innerText;
        localStorage.setItem(key,notes);
    }
}
let to_remove;
let remove_id;
document.addEventListener('click', function(e)
    {
        if(e.target.className=="delete")
        {
        //  alert('BUTTON CLICKED');
         for (let j = 0; j < e.target.parentElement.parentElement.children.length; j++)
         {
            
             if(e.target.parentElement.parentElement.children[j]==e.target.parentElement)
             {
                 to_remove=e.target.parentElement;
                 remove_id=j;
             }
                
         }
            to_remove.remove();
            localStorage.removeItem(remove_id);
        }
        update_local(remove_id);
    });
function update_local(remove_id)
{
    let a;
    for (let index =remove_id; index < localStorage.length; index++)
    {
        a=localStorage.getItem(index+1);
        localStorage.setItem(index,a);
        localStorage.removeItem(index+1);
    }
}
let click_add=document.querySelector('#add_btn');
click_add.addEventListener('click',addnote);

//search the notes
function searchfunc() 
{
    let search_notes=document.querySelector('#search_it');
    search_notes=search_notes.value;
    // console.log(search_notes);
    if( search_notes.length!=0)
    {
        // console.log(search_notes.length);
        for (let i = 0; i < document.querySelector(".container").children.length; i++)
        {
            let n=document.querySelector(".container").children[i].firstChild.innerText.includes(search_notes);
            if(n)
            {
               document.querySelector(".container").children[i].style.display="inline-block";
            //    console.log('block');
            }
            else
            {
                document.querySelector(".container").children[i].style.display="none";
                // console.log('none');
            }
        }
    }
    
}
function normaldisplay()
{
    let search_notes=document.querySelector('#search_it');
    search_notes=search_notes.value;
    if(search_notes.length==0)
    {
        // console.log(search_notes.length);
        for (let i = 0; i < document.querySelector(".container").children.length; i++)
        {
            if(document.querySelector(".container").children[i].style.display=="none")
            {
               document.querySelector(".container").children[i].style.display="inline-block";
            }
        }
    }
}