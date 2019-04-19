// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/pf_redglocal.png",
    title: "Red Glocal",
    about: "Creación de Identidad de marca en proyecto de inclusión multicultural de Estación Central para posterior uso de sus servicios digitales y redes sociales",
}, {
    figure: "media/pf_asd.png",
    title: "Artist Shooter demo",
    about: "Videojuego shoot'em up con ilustradores latinos en donde cada ilustrador diseñaría su propia nave y poderes",
}, {
    figure: "media/pf_ideactiva.jpg",
    title: "Centro Ideactiva",
    about: "Renovación de aplicación de marca del Centro Ideactiva ligado a la actualización de su nueva Web App y expansión a nuevos medios",
}, {
    figure: "media/pf_uchile.jpg",
    title: "Ilustración anatómica U Chile",
    about: "Diversas ilustraciones anatómicas de patologías y tratamientos sobre abdomen y tórax para la facultad de medicina de la Universidad de Chile",
}, {
    figure: "media/V-09.png",
    title: "Hollowmon",
    about: "Set de ilustraciones que une el estilo visual del juego Hollow knight con especies del juego Pokémon.",
}, {
    figure: "media/IMG_4816.jpg",
    title: "Slime Mapping",
    about: "Prototipo para visualizar la idea de un videojuego arcade pixel interactivo que utiliza la técnica del video-mapping jugando con las perspectivas en distintas caras de una superficie tridimensional.",
}, {
    figure: "media/In_the_garden469.png",
    title: "Programmed poster",
    about: "Poster creado a partir de processing, el cual se exporta al presionar click mientras que desarrolla la imagen a partir de la letra de la canción, nombre de la banda y canción.",
}, {
    figure: "media/pf_nekochi.jpg",
    title: "Nekochi",
    about: "Producto de hogar para gatos, que funciona de cama y como dispositivo de transporte de mascotas en casos de emergencia ",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
