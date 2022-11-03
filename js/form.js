var inputs = document.getElementsByClassName('formInput');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nexElementSibling.classList.add('fijar');
        } else{
            this.nexElementSibling.classList.remove('fijar');
            
        }
    });
}