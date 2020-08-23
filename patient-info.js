import firebase from './firebase.js';
var link = document.getElementById('show');
link.addEventListener('click', infoReturn);
function infoReturn(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          // ...
          return;
        } else {
          // User is signed out.
          // ...
          window.location.href = "login.html"
        }
    });
    
    var obj = {
        'patient': [{"first_name":"Cosme","last_name":"Battell","gender":"Male","Temperature('C)":35.9,"Pulse Rate":126,"Oxygen level":92,"Blood Pressure":140,"Nasal Airflow":11,"Skin Conductance":11.1,"A1C":6.7,"Glucose level":88.7},
        {"first_name":"Lena","last_name":"Hallick","gender":"Female","Temperature('C)":32.7,"Pulse Rate":124,"Oxygen level":97,"Blood Pressure":115,"Nasal Airflow":20,"Skin Conductance":2.8,"A1C":8.0,"Glucose level":84.9},
        {"first_name":"Lacey","last_name":"Busfield","gender":"Female","Temperature('C)":32.9,"Pulse Rate":115,"Oxygen level":100,"Blood Pressure":119,"Nasal Airflow":19,"Skin Conductance":1.2,"A1C":5.5,"Glucose level":79.4},
        {"first_name":"Dall","last_name":"Freed","gender":"Male","Temperature('C)":30.7,"Pulse Rate":93,"Oxygen level":98,"Blood Pressure":143,"Nasal Airflow":16,"Skin Conductance":6.5,"A1C":13.7,"Glucose level":118.2},
        {"first_name":"Kaitlyn","last_name":"Giraudeau","gender":"Female","Temperature('C)":33.5,"Pulse Rate":68,"Oxygen level":94,"Blood Pressure":117,"Nasal Airflow":28,"Skin Conductance":18.7,"A1C":11.8,"Glucose level":57.4},
        {"first_name":"Cameron","last_name":"Guillotin","gender":"Male","Temperature('C)":36.4,"Pulse Rate":128,"Oxygen level":100,"Blood Pressure":107,"Nasal Airflow":32,"Skin Conductance":18.1,"A1C":8.7,"Glucose level":56.6},
        {"first_name":"Perry","last_name":"Santos","gender":"Female","Temperature('C)":34.7,"Pulse Rate":64,"Oxygen level":99,"Blood Pressure":150,"Nasal Airflow":20,"Skin Conductance":15.4,"A1C":7.6,"Glucose level":102.0},
        {"first_name":"Pepito","last_name":"Janway","gender":"Male","Temperature('C)":39.2,"Pulse Rate":82,"Oxygen level":96,"Blood Pressure":121,"Nasal Airflow":31,"Skin Conductance":3.8,"A1C":7.5,"Glucose level":102.7},
        {"first_name":"Bryon","last_name":"Spoor","gender":"Male","Temperature('C)":35.4,"Pulse Rate":123,"Oxygen level":94,"Blood Pressure":126,"Nasal Airflow":18,"Skin Conductance":3.2,"A1C":6.3,"Glucose level":87.2},
        {"first_name":"Manya","last_name":"Witheridge","gender":"Female","Temperature('C)":38.1,"Pulse Rate":77,"Oxygen level":99,"Blood Pressure":96,"Nasal Airflow":30,"Skin Conductance":1.6,"A1C":8.7,"Glucose level":46.4},
        {"first_name":"Dore","last_name":"Imort","gender":"Male","Temperature('C)":30.1,"Pulse Rate":118,"Oxygen level":94,"Blood Pressure":114,"Nasal Airflow":40,"Skin Conductance":10.2,"A1C":5.4,"Glucose level":45.5},
        {"first_name":"Jeramie","last_name":"Sandall","gender":"Male","Temperature('C)":34.6,"Pulse Rate":63,"Oxygen level":92,"Blood Pressure":141,"Nasal Airflow":10,"Skin Conductance":5.7,"A1C":7.5,"Glucose level":94.0},
        {"first_name":"Sasha","last_name":"Radage","gender":"Male","Temperature('C)":31.8,"Pulse Rate":126,"Oxygen level":90,"Blood Pressure":142,"Nasal Airflow":13,"Skin Conductance":13.1,"A1C":3.5,"Glucose level":76.1},
        {"first_name":"Chrissy","last_name":"Trenam","gender":"Male","Temperature('C)":31.5,"Pulse Rate":71,"Oxygen level":90,"Blood Pressure":114,"Nasal Airflow":40,"Skin Conductance":9.7,"A1C":14.7,"Glucose level":81.6},
        {"first_name":"Bondy","last_name":"Awton","gender":"Male","Temperature('C)":31.9,"Pulse Rate":80,"Oxygen level":94,"Blood Pressure":107,"Nasal Airflow":27,"Skin Conductance":1.4,"A1C":13.7,"Glucose level":92.8},
        {"first_name":"Dawn","last_name":"Jelf","gender":"Female","Temperature('C)":33.7,"Pulse Rate":80,"Oxygen level":90,"Blood Pressure":105,"Nasal Airflow":17,"Skin Conductance":1.7,"A1C":12.2,"Glucose level":117.5},
        {"first_name":"Cathyleen","last_name":"Brewer","gender":"Female","Temperature('C)":32.2,"Pulse Rate":130,"Oxygen level":91,"Blood Pressure":118,"Nasal Airflow":40,"Skin Conductance":13.4,"A1C":14.5,"Glucose level":107.8},
        {"first_name":"Aimee","last_name":"Schober","gender":"Female","Temperature('C)":34.9,"Pulse Rate":58,"Oxygen level":95,"Blood Pressure":104,"Nasal Airflow":6,"Skin Conductance":15.3,"A1C":9.3,"Glucose level":120.1},
        {"first_name":"Othilia","last_name":"Perillio","gender":"Female","Temperature('C)":37.0,"Pulse Rate":91,"Oxygen level":94,"Blood Pressure":135,"Nasal Airflow":30,"Skin Conductance":19.3,"A1C":3.6,"Glucose level":100.4},
        {"first_name":"Dorthea","last_name":"Kolodziejski","gender":"Female","Temperature('C)":33.3,"Pulse Rate":89,"Oxygen level":95,"Blood Pressure":129,"Nasal Airflow":27,"Skin Conductance":18.6,"A1C":4.4,"Glucose level":78.6},
        {"first_name":"Florri","last_name":"Okenfold","gender":"Female","Temperature('C)":33.9,"Pulse Rate":78,"Oxygen level":90,"Blood Pressure":140,"Nasal Airflow":39,"Skin Conductance":3.7,"A1C":4.2,"Glucose level":103.4},
        {"first_name":"Cayla","last_name":"McVanamy","gender":"Female","Temperature('C)":34.1,"Pulse Rate":107,"Oxygen level":92,"Blood Pressure":131,"Nasal Airflow":16,"Skin Conductance":16.4,"A1C":6.6,"Glucose level":63.3},
        {"first_name":"Desirae","last_name":"Ricson","gender":"Female","Temperature('C)":40.0,"Pulse Rate":73,"Oxygen level":92,"Blood Pressure":102,"Nasal Airflow":28,"Skin Conductance":11.9,"A1C":4.6,"Glucose level":58.0},
        {"first_name":"Tobey","last_name":"Clayfield","gender":"Female","Temperature('C)":32.9,"Pulse Rate":104,"Oxygen level":98,"Blood Pressure":92,"Nasal Airflow":18,"Skin Conductance":12.2,"A1C":6.2,"Glucose level":99.8},
        {"first_name":"Estelle","last_name":"Janik","gender":"Female","Temperature('C)":37.1,"Pulse Rate":84,"Oxygen level":94,"Blood Pressure":132,"Nasal Airflow":13,"Skin Conductance":16.1,"A1C":10.9,"Glucose level":111.6},
        {"first_name":"Brandea","last_name":"Balharry","gender":"Female","Temperature('C)":36.5,"Pulse Rate":104,"Oxygen level":91,"Blood Pressure":130,"Nasal Airflow":23,"Skin Conductance":3.9,"A1C":6.8,"Glucose level":97.9},
        {"first_name":"Georgetta","last_name":"Hantusch","gender":"Female","Temperature('C)":39.2,"Pulse Rate":94,"Oxygen level":98,"Blood Pressure":148,"Nasal Airflow":37,"Skin Conductance":3.4,"A1C":11.4,"Glucose level":108.1},
        {"first_name":"Titus","last_name":"Swalough","gender":"Male","Temperature('C)":38.7,"Pulse Rate":127,"Oxygen level":95,"Blood Pressure":102,"Nasal Airflow":37,"Skin Conductance":12.7,"A1C":4.2,"Glucose level":100.6},
        {"first_name":"Stace","last_name":"Carbine","gender":"Female","Temperature('C)":35.3,"Pulse Rate":62,"Oxygen level":90,"Blood Pressure":128,"Nasal Airflow":38,"Skin Conductance":8.4,"A1C":10.6,"Glucose level":93.5},
        {"first_name":"Andris","last_name":"Blumsom","gender":"Male","Temperature('C)":34.1,"Pulse Rate":59,"Oxygen level":93,"Blood Pressure":125,"Nasal Airflow":12,"Skin Conductance":12.6,"A1C":5.6,"Glucose level":101.3},
        {"first_name":"Dorella","last_name":"Noakes","gender":"Female","Temperature('C)":31.3,"Pulse Rate":72,"Oxygen level":93,"Blood Pressure":99,"Nasal Airflow":18,"Skin Conductance":12.6,"A1C":7.5,"Glucose level":81.7},
        {"first_name":"Julie","last_name":"Romke","gender":"Male","Temperature('C)":34.4,"Pulse Rate":113,"Oxygen level":97,"Blood Pressure":94,"Nasal Airflow":9,"Skin Conductance":18.4,"A1C":3.3,"Glucose level":81.1},
        {"first_name":"Baron","last_name":"Daltry","gender":"Male","Temperature('C)":39.0,"Pulse Rate":109,"Oxygen level":94,"Blood Pressure":138,"Nasal Airflow":38,"Skin Conductance":3.7,"A1C":6.1,"Glucose level":62.2},
        {"first_name":"Karrah","last_name":"Henmarsh","gender":"Female","Temperature('C)":34.9,"Pulse Rate":117,"Oxygen level":100,"Blood Pressure":106,"Nasal Airflow":15,"Skin Conductance":15.4,"A1C":12.3,"Glucose level":116.9},
        {"first_name":"Vivienne","last_name":"Dyment","gender":"Female","Temperature('C)":39.2,"Pulse Rate":112,"Oxygen level":91,"Blood Pressure":97,"Nasal Airflow":9,"Skin Conductance":5.5,"A1C":5.7,"Glucose level":49.7},
        {"first_name":"Marshall","last_name":"Stanyforth","gender":"Male","Temperature('C)":30.7,"Pulse Rate":107,"Oxygen level":98,"Blood Pressure":125,"Nasal Airflow":19,"Skin Conductance":6.8,"A1C":12.8,"Glucose level":114.8},
        {"first_name":"Granny","last_name":"Battman","gender":"Male","Temperature('C)":31.4,"Pulse Rate":108,"Oxygen level":96,"Blood Pressure":129,"Nasal Airflow":6,"Skin Conductance":18.2,"A1C":6.6,"Glucose level":122.5},
        {"first_name":"Koren","last_name":"Meus","gender":"Female","Temperature('C)":38.7,"Pulse Rate":75,"Oxygen level":90,"Blood Pressure":93,"Nasal Airflow":24,"Skin Conductance":17.1,"A1C":14.0,"Glucose level":81.7},
        {"first_name":"Sandye","last_name":"Mirams","gender":"Female","Temperature('C)":30.3,"Pulse Rate":68,"Oxygen level":93,"Blood Pressure":131,"Nasal Airflow":12,"Skin Conductance":7.0,"A1C":3.2,"Glucose level":87.7},
        {"first_name":"Georgianne","last_name":"Gonneau","gender":"Female","Temperature('C)":35.1,"Pulse Rate":107,"Oxygen level":99,"Blood Pressure":144,"Nasal Airflow":11,"Skin Conductance":13.5,"A1C":13.1,"Glucose level":128.1},
        {"first_name":"Madonna","last_name":"Murrum","gender":"Female","Temperature('C)":31.2,"Pulse Rate":61,"Oxygen level":91,"Blood Pressure":111,"Nasal Airflow":35,"Skin Conductance":4.4,"A1C":13.3,"Glucose level":64.4},
        {"first_name":"Morissa","last_name":"Nesfield","gender":"Female","Temperature('C)":36.6,"Pulse Rate":96,"Oxygen level":100,"Blood Pressure":93,"Nasal Airflow":33,"Skin Conductance":14.8,"A1C":7.3,"Glucose level":86.5},
        {"first_name":"Marlee","last_name":"Gimson","gender":"Female","Temperature('C)":37.4,"Pulse Rate":127,"Oxygen level":93,"Blood Pressure":108,"Nasal Airflow":21,"Skin Conductance":5.4,"A1C":11.6,"Glucose level":122.4},
        {"first_name":"Ellette","last_name":"Bennit","gender":"Female","Temperature('C)":38.0,"Pulse Rate":63,"Oxygen level":100,"Blood Pressure":118,"Nasal Airflow":30,"Skin Conductance":11.1,"A1C":14.7,"Glucose level":53.6},
        {"first_name":"Giorgi","last_name":"Tuohy","gender":"Male","Temperature('C)":37.6,"Pulse Rate":129,"Oxygen level":98,"Blood Pressure":107,"Nasal Airflow":21,"Skin Conductance":18.7,"A1C":11.6,"Glucose level":85.7},
        {"first_name":"Marylin","last_name":"Harrild","gender":"Female","Temperature('C)":33.0,"Pulse Rate":90,"Oxygen level":96,"Blood Pressure":102,"Nasal Airflow":19,"Skin Conductance":1.0,"A1C":9.5,"Glucose level":59.1},
        {"first_name":"Marco","last_name":"Cozens","gender":"Male","Temperature('C)":38.3,"Pulse Rate":100,"Oxygen level":98,"Blood Pressure":100,"Nasal Airflow":20,"Skin Conductance":8.8,"A1C":9.4,"Glucose level":104.4},
        {"first_name":"Tedda","last_name":"Spivey","gender":"Female","Temperature('C)":39.3,"Pulse Rate":58,"Oxygen level":100,"Blood Pressure":132,"Nasal Airflow":32,"Skin Conductance":14.0,"A1C":8.6,"Glucose level":103.2},
        {"first_name":"Rene","last_name":"Di Bartolommeo","gender":"Male","Temperature('C)":32.3,"Pulse Rate":127,"Oxygen level":90,"Blood Pressure":140,"Nasal Airflow":39,"Skin Conductance":15.1,"A1C":11.8,"Glucose level":72.5},
        {"first_name":"Ellette","last_name":"Canadine","gender":"Female","Temperature('C)":35.1,"Pulse Rate":82,"Oxygen level":96,"Blood Pressure":141,"Nasal Airflow":33,"Skin Conductance":17.2,"A1C":13.8,"Glucose level":81.5},
        {"first_name":"Katherine","last_name":"Fenix","gender":"Female","Temperature('C)":38.6,"Pulse Rate":61,"Oxygen level":97,"Blood Pressure":128,"Nasal Airflow":25,"Skin Conductance":13.9,"A1C":6.8,"Glucose level":73.4},
        {"first_name":"Rickie","last_name":"Wagon","gender":"Female","Temperature('C)":30.5,"Pulse Rate":91,"Oxygen level":97,"Blood Pressure":135,"Nasal Airflow":39,"Skin Conductance":18.3,"A1C":3.0,"Glucose level":72.2},
        {"first_name":"Tisha","last_name":"Rushmer","gender":"Female","Temperature('C)":34.2,"Pulse Rate":100,"Oxygen level":97,"Blood Pressure":123,"Nasal Airflow":10,"Skin Conductance":6.5,"A1C":6.8,"Glucose level":104.6},
        {"first_name":"Micheal","last_name":"Stenners","gender":"Male","Temperature('C)":31.6,"Pulse Rate":116,"Oxygen level":94,"Blood Pressure":142,"Nasal Airflow":30,"Skin Conductance":12.1,"A1C":10.3,"Glucose level":77.5},
        {"first_name":"Mathian","last_name":"Fullman","gender":"Male","Temperature('C)":33.1,"Pulse Rate":123,"Oxygen level":93,"Blood Pressure":145,"Nasal Airflow":39,"Skin Conductance":11.5,"A1C":7.9,"Glucose level":62.8},
        {"first_name":"Janina","last_name":"Claricoats","gender":"Female","Temperature('C)":32.1,"Pulse Rate":105,"Oxygen level":97,"Blood Pressure":130,"Nasal Airflow":11,"Skin Conductance":3.3,"A1C":3.5,"Glucose level":89.5},
        {"first_name":"Gennifer","last_name":"Leggs","gender":"Female","Temperature('C)":39.1,"Pulse Rate":93,"Oxygen level":98,"Blood Pressure":141,"Nasal Airflow":32,"Skin Conductance":16.9,"A1C":14.3,"Glucose level":48.9},
        {"first_name":"Katinka","last_name":"Farriar","gender":"Female","Temperature('C)":39.7,"Pulse Rate":91,"Oxygen level":99,"Blood Pressure":125,"Nasal Airflow":18,"Skin Conductance":19.9,"A1C":7.9,"Glucose level":93.6},
        {"first_name":"Teresita","last_name":"Meharry","gender":"Female","Temperature('C)":37.6,"Pulse Rate":111,"Oxygen level":94,"Blood Pressure":94,"Nasal Airflow":24,"Skin Conductance":0.6,"A1C":14.9,"Glucose level":119.8},
        {"first_name":"Neala","last_name":"Robak","gender":"Female","Temperature('C)":37.6,"Pulse Rate":120,"Oxygen level":92,"Blood Pressure":150,"Nasal Airflow":5,"Skin Conductance":14.7,"A1C":13.4,"Glucose level":52.5},
        {"first_name":"Sadie","last_name":"Delacourt","gender":"Female","Temperature('C)":35.0,"Pulse Rate":55,"Oxygen level":95,"Blood Pressure":107,"Nasal Airflow":30,"Skin Conductance":14.4,"A1C":13.1,"Glucose level":65.4},
        {"first_name":"Abbi","last_name":"Styant","gender":"Female","Temperature('C)":34.0,"Pulse Rate":68,"Oxygen level":91,"Blood Pressure":140,"Nasal Airflow":20,"Skin Conductance":1.9,"A1C":6.1,"Glucose level":83.6},
        {"first_name":"Olin","last_name":"Staig","gender":"Male","Temperature('C)":36.5,"Pulse Rate":122,"Oxygen level":100,"Blood Pressure":91,"Nasal Airflow":13,"Skin Conductance":7.0,"A1C":11.9,"Glucose level":75.6},
        {"first_name":"Emelyne","last_name":"Troucher","gender":"Female","Temperature('C)":33.1,"Pulse Rate":90,"Oxygen level":95,"Blood Pressure":137,"Nasal Airflow":36,"Skin Conductance":15.1,"A1C":14.5,"Glucose level":115.7},
        {"first_name":"Hazel","last_name":"Cruden","gender":"Male","Temperature('C)":33.7,"Pulse Rate":106,"Oxygen level":95,"Blood Pressure":104,"Nasal Airflow":35,"Skin Conductance":8.1,"A1C":3.9,"Glucose level":90.4},
        {"first_name":"Durant","last_name":"Rudkin","gender":"Male","Temperature('C)":34.9,"Pulse Rate":121,"Oxygen level":93,"Blood Pressure":149,"Nasal Airflow":14,"Skin Conductance":0.8,"A1C":10.1,"Glucose level":126.3},
        {"first_name":"Noemi","last_name":"Buff","gender":"Female","Temperature('C)":32.2,"Pulse Rate":80,"Oxygen level":90,"Blood Pressure":144,"Nasal Airflow":16,"Skin Conductance":15.9,"A1C":14.3,"Glucose level":64.8},
        {"first_name":"Corenda","last_name":"Braime","gender":"Female","Temperature('C)":34.9,"Pulse Rate":83,"Oxygen level":93,"Blood Pressure":138,"Nasal Airflow":14,"Skin Conductance":1.7,"A1C":12.2,"Glucose level":74.8},
        {"first_name":"Franciskus","last_name":"Vigours","gender":"Male","Temperature('C)":38.0,"Pulse Rate":124,"Oxygen level":94,"Blood Pressure":117,"Nasal Airflow":21,"Skin Conductance":8.5,"A1C":4.6,"Glucose level":47.0},
        {"first_name":"Eddy","last_name":"Iston","gender":"Male","Temperature('C)":33.3,"Pulse Rate":122,"Oxygen level":93,"Blood Pressure":110,"Nasal Airflow":15,"Skin Conductance":7.5,"A1C":13.7,"Glucose level":68.0},
        {"first_name":"Mathian","last_name":"Ricciardo","gender":"Male","Temperature('C)":34.7,"Pulse Rate":127,"Oxygen level":99,"Blood Pressure":117,"Nasal Airflow":5,"Skin Conductance":17.8,"A1C":13.3,"Glucose level":63.4},
        {"first_name":"Jeremie","last_name":"MacDiarmid","gender":"Male","Temperature('C)":31.6,"Pulse Rate":126,"Oxygen level":98,"Blood Pressure":138,"Nasal Airflow":9,"Skin Conductance":0.0,"A1C":14.0,"Glucose level":62.6},
        {"first_name":"Ash","last_name":"Beaglehole","gender":"Male","Temperature('C)":31.6,"Pulse Rate":121,"Oxygen level":100,"Blood Pressure":143,"Nasal Airflow":5,"Skin Conductance":7.5,"A1C":3.5,"Glucose level":126.6},
        {"first_name":"Margaretta","last_name":"Silly","gender":"Female","Temperature('C)":39.9,"Pulse Rate":95,"Oxygen level":97,"Blood Pressure":137,"Nasal Airflow":23,"Skin Conductance":11.0,"A1C":9.3,"Glucose level":104.6},
        {"first_name":"Sam","last_name":"Mingauld","gender":"Female","Temperature('C)":39.8,"Pulse Rate":89,"Oxygen level":93,"Blood Pressure":133,"Nasal Airflow":21,"Skin Conductance":0.6,"A1C":4.3,"Glucose level":100.3},
        {"first_name":"Clarke","last_name":"Gelling","gender":"Male","Temperature('C)":39.7,"Pulse Rate":111,"Oxygen level":93,"Blood Pressure":132,"Nasal Airflow":40,"Skin Conductance":18.1,"A1C":7.6,"Glucose level":89.2},
        {"first_name":"Dominique","last_name":"Penson","gender":"Male","Temperature('C)":32.8,"Pulse Rate":115,"Oxygen level":91,"Blood Pressure":114,"Nasal Airflow":20,"Skin Conductance":6.3,"A1C":12.6,"Glucose level":79.5},
        {"first_name":"Sabine","last_name":"Wardrop","gender":"Female","Temperature('C)":31.6,"Pulse Rate":96,"Oxygen level":95,"Blood Pressure":116,"Nasal Airflow":10,"Skin Conductance":19.3,"A1C":7.6,"Glucose level":127.7},
        {"first_name":"Juliette","last_name":"Frostdicke","gender":"Female","Temperature('C)":31.9,"Pulse Rate":83,"Oxygen level":94,"Blood Pressure":106,"Nasal Airflow":40,"Skin Conductance":10.5,"A1C":9.3,"Glucose level":113.8},
        {"first_name":"Carole","last_name":"Chinnock","gender":"Female","Temperature('C)":39.0,"Pulse Rate":84,"Oxygen level":97,"Blood Pressure":99,"Nasal Airflow":18,"Skin Conductance":13.0,"A1C":5.4,"Glucose level":114.1},
        {"first_name":"Calv","last_name":"Godber","gender":"Male","Temperature('C)":39.1,"Pulse Rate":109,"Oxygen level":93,"Blood Pressure":144,"Nasal Airflow":25,"Skin Conductance":18.6,"A1C":14.6,"Glucose level":60.4},
        {"first_name":"Othella","last_name":"Swanwick","gender":"Female","Temperature('C)":35.0,"Pulse Rate":56,"Oxygen level":99,"Blood Pressure":142,"Nasal Airflow":25,"Skin Conductance":15.8,"A1C":13.2,"Glucose level":121.1},
        {"first_name":"Bjorn","last_name":"Mocher","gender":"Male","Temperature('C)":32.1,"Pulse Rate":95,"Oxygen level":98,"Blood Pressure":116,"Nasal Airflow":36,"Skin Conductance":3.5,"A1C":4.2,"Glucose level":126.3},
        {"first_name":"Isidor","last_name":"Kerby","gender":"Male","Temperature('C)":31.7,"Pulse Rate":107,"Oxygen level":95,"Blood Pressure":139,"Nasal Airflow":8,"Skin Conductance":5.6,"A1C":8.4,"Glucose level":122.6},
        {"first_name":"Mikkel","last_name":"Marrow","gender":"Male","Temperature('C)":37.5,"Pulse Rate":68,"Oxygen level":96,"Blood Pressure":120,"Nasal Airflow":5,"Skin Conductance":10.2,"A1C":11.0,"Glucose level":70.1},
        {"first_name":"Lizette","last_name":"Kilmurry","gender":"Female","Temperature('C)":30.5,"Pulse Rate":62,"Oxygen level":98,"Blood Pressure":146,"Nasal Airflow":35,"Skin Conductance":15.6,"A1C":14.1,"Glucose level":64.9},
        {"first_name":"Gerri","last_name":"Keenan","gender":"Male","Temperature('C)":32.9,"Pulse Rate":122,"Oxygen level":98,"Blood Pressure":97,"Nasal Airflow":11,"Skin Conductance":0.8,"A1C":12.5,"Glucose level":71.4},
        {"first_name":"Percival","last_name":"Sander","gender":"Male","Temperature('C)":38.0,"Pulse Rate":59,"Oxygen level":92,"Blood Pressure":90,"Nasal Airflow":7,"Skin Conductance":18.0,"A1C":10.3,"Glucose level":68.5},
        {"first_name":"Irwinn","last_name":"Calbaithe","gender":"Male","Temperature('C)":34.3,"Pulse Rate":83,"Oxygen level":99,"Blood Pressure":114,"Nasal Airflow":16,"Skin Conductance":12.1,"A1C":12.2,"Glucose level":110.2},
        {"first_name":"Roanna","last_name":"Boissier","gender":"Female","Temperature('C)":30.5,"Pulse Rate":96,"Oxygen level":98,"Blood Pressure":129,"Nasal Airflow":10,"Skin Conductance":8.1,"A1C":8.1,"Glucose level":111.4},
        {"first_name":"Drew","last_name":"Standish","gender":"Male","Temperature('C)":30.1,"Pulse Rate":91,"Oxygen level":97,"Blood Pressure":115,"Nasal Airflow":21,"Skin Conductance":8.2,"A1C":12.7,"Glucose level":82.2},
        {"first_name":"Kalindi","last_name":"Cristofvao","gender":"Female","Temperature('C)":37.0,"Pulse Rate":86,"Oxygen level":98,"Blood Pressure":122,"Nasal Airflow":25,"Skin Conductance":17.4,"A1C":13.8,"Glucose level":54.9},
        {"first_name":"Bancroft","last_name":"Brower","gender":"Male","Temperature('C)":34.3,"Pulse Rate":89,"Oxygen level":97,"Blood Pressure":142,"Nasal Airflow":8,"Skin Conductance":19.0,"A1C":14.9,"Glucose level":83.9},
        {"first_name":"Marcile","last_name":"Suggitt","gender":"Female","Temperature('C)":38.6,"Pulse Rate":99,"Oxygen level":92,"Blood Pressure":108,"Nasal Airflow":28,"Skin Conductance":8.3,"A1C":11.8,"Glucose level":73.5},
        {"first_name":"Alford","last_name":"Harg","gender":"Male","Temperature('C)":39.2,"Pulse Rate":112,"Oxygen level":98,"Blood Pressure":102,"Nasal Airflow":10,"Skin Conductance":0.9,"A1C":9.3,"Glucose level":45.4},
        {"first_name":"Jelene","last_name":"Poschel","gender":"Female","Temperature('C)":32.6,"Pulse Rate":85,"Oxygen level":94,"Blood Pressure":132,"Nasal Airflow":15,"Skin Conductance":14.7,"A1C":14.2,"Glucose level":124.6},
        {"first_name":"Corbin","last_name":"Arger","gender":"Male","Temperature('C)":30.6,"Pulse Rate":110,"Oxygen level":99,"Blood Pressure":134,"Nasal Airflow":25,"Skin Conductance":17.3,"A1C":6.6,"Glucose level":80.7},
        {"first_name":"Jedediah","last_name":"Measor","gender":"Male","Temperature('C)":36.8,"Pulse Rate":123,"Oxygen level":91,"Blood Pressure":92,"Nasal Airflow":7,"Skin Conductance":9.7,"A1C":11.8,"Glucose level":58.6},
        {"first_name":"Lyda","last_name":"Shier","gender":"Female","Temperature('C)":33.5,"Pulse Rate":130,"Oxygen level":98,"Blood Pressure":113,"Nasal Airflow":9,"Skin Conductance":13.8,"A1C":13.1,"Glucose level":106.8},
        {"first_name":"Giulio","last_name":"Twelftree","gender":"Male","Temperature('C)":33.5,"Pulse Rate":58,"Oxygen level":97,"Blood Pressure":126,"Nasal Airflow":16,"Skin Conductance":14.1,"A1C":4.9,"Glucose level":95.9}]
    };
    // (Note that because `price` and such are given as strings in your object,
    // the below relies on the fact that <= and >= with a string and number
    // will coerce the string to a number before comparing.)
    var name = window.localStorage.getItem("drMedName")
    if (name.includes("Doctor") || name.includes("doctor")){
        let dataStr = JSON.stringify(obj);
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

        let exportFileDefaultName = 'data.json';

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        console.log("Downloaded!")
    } else {
        var newArray = obj.patient.filter(function (el) {
        return el.first_name == name; // Changed this so a home would match
        });
        console.log(newArray);
        var mainContainer = document.getElementById("dataInfo")

        for (var i = 0; i < newArray.length; i++){
            var div = document.createElement("div")
            div.innerHTML = "Name: " + newArray[i].first_name + "<br />"+"Pulse Rate: " + newArray[i].heart_rate + "<br />"+"Temp: " + newArray[i].temp + "C" + "<br />"+" Blood Pressure: " + newArray[i].bp + "<br />"+ " Heart Rate: " + newArray[i].heart_rate + " BPM" + "<br />"+" A1C Level: " + newArray[i].ac + " mg/dL"+ "<br />"+"Skin Conductance: 0.4uS"+"<br />"+"Glucose Level: "+newArray[i].ac
            mainContainer.appendChild(div)
        }
    }
}
