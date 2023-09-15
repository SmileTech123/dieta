function getDayName()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const weekday = urlParams.get('weekday')
    console.log(weekday);
    if(weekday!=null){
        return weekday
    }else{
        var date = new Date();
        return date.toLocaleDateString("it-IT", { weekday: 'long' });
    }

}

$(document).ready(()=>{
    var lunediColazioneIngredienti=["Yogurt Magro","Fiocchi d'avena","Frutto di stagione"]
    var lunediColazionePeso=["125","25","1n"]
    var lunediPranzoIngredienti=["Riso","Lattughino( Pomodoro, Mais )","Tonno al naturale"]
    var lunediPranzoPeso=["70","120 (1n, 2 cucchiai)","1 scatoletta"]
    var lunediCenaIngredienti=["Pollo o Pesce","Verdure Lessate"]
    var lunediCenaPeso=["140 o 160","170"]
    var lunediSpuntiniIngredienti=["Frutto (Mattina)","Noci (Mattina)","Parmigiano (Pomeriggio)"]
    var lunediSpuntiniPeso=["1n","2n","20"]
    var giovediColazioneIngredienti=["Tè verde","Cracker di riso"]
    var giovediColazionePeso=["1 tazza","1 pacchetto"]
    var giovediPranzoIngredienti=["Insalata di ceci","Galette di riso","Fagiolini"]
    var giovediPranzoPeso=["60","2n","160"]
    var giovediCenaIngredienti=["Salmone Affumicato","Arance","Lattughino","Pomodoro"]
    var giovediCenaPeso=["100","40","1n","100","1n"]
    var giovediSpuntiniIngredienti=["Prosciutto Crudo (Mattina)","Budino Keto (Pomeriggio)"]
    var giovediSpuntiniPeso=["60","1 pacchetto"]
    $("#dayweek").text("Dieta Fabio ("+getDayName()+")")
    switch (getDayName()) {
        case "lunedì":
            lunediColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+lunediColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)

            })
            lunediPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+lunediPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            lunediCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+lunediCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            lunediSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+lunediSpuntiniPeso[index]+"</td>" +
                    "</tr>"
                $("#bodySpuntini").append(str)

            })
            break
        case "giovedì":
            giovediColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+giovediColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)
            })
            giovediPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+giovediPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            giovediCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+giovediCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            giovediSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+giovediSpuntiniPeso[index]+"</td>" +
                    "</tr>"
                $("#bodySpuntini").append(str)

            })
            break
    }

})