function myFunction(){
    let x = document.getElementById('small_triangle')
    let y = document.getElementById('links_small');
    if(y.style.display === 'flex'){
        y.style.display = 'none'
        x.style.display ='none'
    } else{
        y.style.display ='flex'
        x.style.display ='block'
    }
}


function someFunc(){
    myFunction();
  
}