$(document).ready(function() {
    $('#btn').click(function(e) {
        $('#content').fadeToggle('slow')
    })

    $('#inp').keydown(function() {
        $('#text').html($(this).val().length)
    })

    $('#inp').blur(function() {
        $(this).css('background', 'green');
    })


    $('#btn').click(function() {
        $('#box').animate({ left: '700px', borderRadius: '100%' }, 1500, function() {
            $(this).animate({ top: '600px' }, 1500, function() {
                $(this).animate({ left: '0' }, 1500, function() {
                    $(this).animate({ top: '100px', borderRadius: '0'  }, 1500, function() {
                        $(this).fadeOut('slow')
                    })
                })
            })
        });
    })


})