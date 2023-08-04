window.alert("Olá usuário!");

if (window.confirm("Deseja dizer o seu nome?")) {

    let nome = window.prompt("Qual o seu nome?");
    let sobrenome = window.prompt("Qual o seu sobrenome?");
    let concantene = nome + " " + sobrenome + " ";

    let nome_sobrenome = Number(prompt("Quantas vezes você deseja imprimir seu nome?"));

    for (c = 0; c <= nome_sobrenome; c++) {

        document.write(concantene + "<br>");

    }

}

else {

    alert("Tchau!");

    function declarationMed() {

        let n1 = Number(prompt("Digite um primeiro número:"));
        let n2 = Number(prompt("Digite um segundo número"));
        let n3 = Number(prompt("Digite um terceiro número"));

        let media = (n1 + n2 + n3) / 3;

        return media;

    }

    let guardar_return = declarationMed();
    document.write(guardar_return);



    function anonimaMed() {


        let n1 = Number(prompt("Digite um primeiro número:"));
        let n2 = Number(prompt("Digite um segundo número"));
        let n3 = Number(prompt("Digite um terceiro número"));

        let media = (n1 + n2 + n3) / 3;

        return media;

    }

    alert(anonimaMed());



    function arrowMed() {

        let n1 = Number(prompt("Digite um primeiro número:"));
        let n2 = Number(prompt("Digite um segundo número"));
        let n3 = Number(prompt("Digite um terceiro número"));

        let media = (n1 + n2 + n3) / 3;

        return media;

    }

    let console_arrowMed = arrowMed();
    console.log(console_arrowMed);

}