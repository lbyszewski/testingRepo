function test(){
    var a = parseInt(document.getElementById('first').value);
    var b = parseInt(document.getElementById('last').value);


    for(var i = a;i<=b;i++){

        document.writeln('<table>' +'<th>' +i + '</th>' + '</table>');
    }
}