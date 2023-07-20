let libros = [];

fetch("js/libros.json").then(
        function (jsonText) {
            return jsonText.json();
        }
).then(
        function (jsonData) {
            libros = jsonData;
            console.log(libros);
            cargarTabla();
        }
);

function cargarTabla() {
    let cuerpoTabla = "";
    for (let i = 0; i < libros.length; i++) {
        cuerpoTabla += '<br>' + '<div class="cont p-2 m-2 col-lg-6">' + '<center>'+'<img style=" height: 250px; width: 200px;" class=" card-img-top mx-auto container-fluid" \n\
                        src= "' + libros[i].img + '" alt="Card image cap">'+ '<center>' + '<br>';
        cuerpoTabla += libros[i].title + '<br>' + '<br>';
        cuerpoTabla += libros[i].dateP + '<br>' + '<br>';
        cuerpoTabla += libros[i].synopsis + '</div>'+ '<br>';
    }
    document.getElementById("card").innerHTML = cuerpoTabla;

}
