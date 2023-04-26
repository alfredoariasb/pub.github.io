$(document).on("ready", function () {
    window.nombre = '';
    window.correo = '';
    window.asistentes = 0;
    window.vform1 = 0;
    window.vform2 = 0;
    $('#nombre_reserva').val('');
    $('#correo_reservas').val('');
    $('#telef_reserva').val('');
    $('#date').val('');
    $('#time').val('');
    $('#number').val('');


});

function modal1o(){
    $('#myModal1').css('display','block');
}
function modal1c(){
    $('#myModal1').css('display','none');
}
function modal2o(){
    $('#myModal2').css('display','block');
}
function modal2c(){
    $('#myModal2').css('display','none');
}
function modal3o(){
    $('#myModal3').css('display','block');
}
function modal3c(){
    $('#myModal3').css('display','none');
}

function modalContacto(){
    
}


function irContacto() {
    if ($(window).width() <= 620) {
        if (window.vform1 == 0) {
            $('.form1').css('display', 'unset');
            $('.form2').css('display', 'none');
            window.vform1 = 1;
        } else {
            $('.form1').css('display', 'none');
            window.vform1 = 0;
        }
    }
}

function irReserva() {
    if ($(window).width() <= 620) {
        if (window.vform2 == 0) {
            $('.form2').css('display', 'unset');
            $('.form1').css('display', 'none');
            window.vform2 = 1;
        } else {
            $('.form2').css('display', 'none');
            window.vform2 = 0;
        }
    }
}

function reservar() {
    var nombre;
    var correo;
    var asistentes;
    nombre = document.getElementById('nombre_reserva').value;
    correo = document.getElementById('correo_reservas').value;
    if (nombre === '' || correo === '') {
        alert('Debe llenar todos los campos');
    } else {
        asistentes = document.getElementById('number').value;

        alert('Estimad@' + nombre + ' agradecemos por reservar con nosotros. Hemos registrado ' + asistentes + ' asistentes. Hemos enviado el código de confirmación a su correo: ' + correo + ', Gracias por preferirnos');
    }
}


