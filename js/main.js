$(document).ready(function(){
    $('.searchPhoto').on('keyup',function(){
        var value = $(this).val().toLowerCase();
        $('a').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        });
    });
});