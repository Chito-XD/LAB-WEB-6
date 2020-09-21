
$('#btn-add').on('click', function(e){
    e.preventDefault();

    const itemValue = $('#input').val();

    if (itemValue === ''){
        alert('Por favor ingresa un valor');
        return;
    }

    $('#list-container').append(`
        <div class='list-item'> 
            <p> ${itemValue} </p>
            <button class='btn-check'> check </button> 
            <button class='btn-delete'> delete </button> 
        </div>`
    );
});

$('#list-container').on('click', '.btn-check', function(){
    $(this).parent().toggleClass('check');
});

$('#list-container').on('click', '.btn-delete', function(){
    $(this).parent().remove();
});