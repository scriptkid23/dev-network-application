$(document).ready(function(){
    $('form').on('submit',function(event){

        $.ajax({
            data:$('#exampleInputEmail1').val(),
            type:'POST',
            url :'/process'
                
        });
        
        event.preventDefault();

    })

});