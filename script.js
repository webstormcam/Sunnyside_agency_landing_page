function myFunction(){
    let x = document.getElementById('small_triangle')
    let y = document.getElementById('links_small');
    if(y.style.display === 'none'){
        y.style.display = 'flex'
        x.style.display ='block'
    } else{
        y.style.display ='none'
        x.style.display ='none'
    }
}