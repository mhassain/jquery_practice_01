
$('#firstName').keyup(function(){
    var firstNameValue = $('#firstName').val();
    $('#one').text(firstNameValue);
});

$('#lastName').keyup(function(){
    var lastNameValue = $('#lastName').val();
    $('#two').text(lastNameValue);
});

$('#lastName').blur(function(){
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    $('#three').text(firstNameValue+' '+lastNameValue);
});

/*=============================================*/

$('#image1').click(function(){
    //alert('test');
    var imageValue = $(this).attr('src');
    $('#mainImage').attr('src', imageValue);
});

$('#image2').click(function(){
    //alert('test');
    var imageValue = $(this).attr('src');
    $('#mainImage').attr('src', imageValue);
});

$('#image3').click(function(){
    //alert('test');
    var imageValue = $(this).attr('src');
    $('#mainImage').attr('src', imageValue);
});

$('#image4').click(function(){
    //alert('test');
    var imageValue = $(this).attr('src');
    $('#mainImage').attr('src', imageValue);
});



