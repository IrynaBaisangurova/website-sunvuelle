// https://api.telegram.org/botTOKEN/getUpdates

$('#button').on('click', function(e){
    //отмена перезагрузки сайта при нажатии на кнопку
    e.preventDefault();
    //пишем переменные и берем из input значения, которые прописали + обрезаем боковые отступы
    let email = $('#email').val().trim();

    //делаем валидацию по отправке пустой строки на сервер 

    if(email == ""){
        $('#error-email').text('Enter your email');
                //если у нас какая-то ошибка, то код перестает работать дальше (отправка на сервер не осуществляется)
        return false

    }
    //отправка запроса на сервер - php
    $.ajax({
        // куда отправляем
        url: 'ajax/telegram.php',
        //какой метод используем ( у нас просто отправка материала)
        type: 'POST',
        //отменяем кеширование
        cache: false,
        // какие данные отправляем
        data: {'email': email}, 
        // что именно отправляем
        dataType: 'html',
        // перед тем как отправить мы делаем кнопку неактивной, чтобы пользователь не смог сделать миллион отправок
        beforeSend: function(){
            $('#button').prop('disabled', true)
        },
        // при успешной отправке делаем такие действия
        success: function(){

            $('.modal-overlay').fadeIn();
            $('#email').val('');
            $('#error-email').text('');
            $('#button').prop('disabled', false)
        }
    })
})