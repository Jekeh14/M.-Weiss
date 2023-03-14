// Afficher la date et lâ€™heure actuelles en JavaScript
var d = new Date();
var date = d.getDate() + '-'+(d.getMonth()+1)+'-'+d.getFullYear();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = "Date  : "+ date + "\n" + "Heure : " + hours;
console.log(fullDate); //Affiche la date complète sur la console