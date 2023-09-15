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
    //lunedi
    var lunediColazioneIngredienti=["Yogurt Magro","Fiocchi d'avena","Frutto di stagione"]
    var lunediColazionePeso=["125","25","1n"]
    var lunediPranzoIngredienti=["Riso","Lattughino( Pomodoro, Mais )","Tonno al naturale"]
    var lunediPranzoPeso=["70","120 (1n, 2 cucchiai)","1 scatoletta"]
    var lunediCenaIngredienti=["Pollo o Pesce","Verdure Lessate"]
    var lunediCenaPeso=["140 o 160","170"]
    var lunediSpuntiniIngredienti=["Frutto (Mattina)","Noci (Mattina)","Parmigiano (Pomeriggio)"]
    var lunediSpuntiniPeso=["1n","2n","20"]
    //martedi
    var martediColazioneIngredienti=["Tè verde","Fette biscottate con composta Hero Light"]
    var martediColazionePeso=["1 tazza","3n"]
    var martediPranzoIngredienti=["Uova","Zucchine grigliate"]
    var martediPranzoPeso=["2n","200"]
    var martediCenaIngredienti=["Pesce a forno con pomodoro e peperoncino","Lattughino"]
    var martediCenaPeso=["200","100"]
    var martediSpuntiniIngredienti=["Frutto (Mattina)","Bresaola (Pomeriggio)","Nocciole (Pomeriggio)"]
    var martediSpuntiniPeso=["1n","40","6n"]
    //mercoledi
    var mercolediColazioneIngredienti=["Pancake"]
    var mercolediColazionePeso=["4n"]
    var mercolediPranzoIngredienti=["Riso","Lattughino","Petto di pollo"]
    var mercolediPranzoPeso=["70","140","150"]
    var mercolediCenaIngredienti=["Fettina Vitello","Funghi"]
    var mercolediCenaPeso=["140","200"]
    var mercolediSpuntiniIngredienti=["Frutto (Mattina)","Noci (Mattina)"]
    var mercolediSpuntiniPeso=["1n","2n"]
    //giovedi
    var giovediColazioneIngredienti=["Tè verde","Cracker di riso"]
    var giovediColazionePeso=["1 tazza","1 pacchetto"]
    var giovediPranzoIngredienti=["Insalata di ceci","Galette di riso","Fagiolini"]
    var giovediPranzoPeso=["60","2n","160"]
    var giovediCenaIngredienti=["Salmone Affumicato","Arance","Lattughino","Pomodoro"]
    var giovediCenaPeso=["100","40","1n","100","1n"]
    var giovediSpuntiniIngredienti=["Prosciutto Crudo (Mattina)","Budino Keto (Pomeriggio)"]
    var giovediSpuntiniPeso=["60","1 pacchetto"]
    //venerdi
    var venerdiColazioneIngredienti=["Latte di soia","FIocchi d avena","Biscotti secchi"]
    var venerdiColazionePeso=["220","20","3n"]
    var venerdiPranzoIngredienti=["Pesce spada","Lattughino"]
    var venerdiPranzoPeso=["1 fetta","140"]
    var venerdiCenaIngredienti=["Tacchino ai ferri","Melanzane"]
    var venerdiCenaPeso=["150","200"]
    var venerdiSpuntiniIngredienti=["Frutto (Mattina)","Noci (Mattina)","Parmigiano (Pomeriggio)","Proteine in mezzo bicchiere di latte di soia (Pomeriggio)"]
    var venerdiSpuntiniPeso=["1n","2n","20","1 cucchiaio"]
    //sabato
    var sabatoColazioneIngredienti=["Yogurt Magro","Fiocchi d'avena"]
    var sabatoColazionePeso=["1n","20"]
    var sabatoPranzoIngredienti=["Lattughino","Feta","Carota"]
    var sabatoPranzoPeso=["150","60","1n"]
    var sabatoCenaIngredienti=["Pizza integrale senza mozzarella"]
    var sabatoCenaPeso=["1n"]
    var sabatoSpuntiniIngredienti=["Parmigiano (Mattina)","Coppetta gelato senza zuccheri (Pomeriggio)"]
    var sabatoSpuntiniPeso=["20","1n"]
    //domenica
    var domenicaColazioneIngredienti=["Latte di soia","Fette biscottate"]
    var domenicaColazionePeso=["220","3n"]
    var domenicaPranzoIngredienti=["Spigola o Gameri e totani","Lattughino"]
    var domenicaPranzoPeso=["1n o 300","200"]
    var domenicaCenaIngredienti=["Salmone Affumicato","Melanzane grigliate"]
    var domenicaCenaPeso=["100","200"]
    var domenicaSpuntiniIngredienti=["Frutto (Mattina)","Olive (Pomeriggio)"]
    var domenicaSpuntiniPeso=["1n","25"]
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
        case "martedì":
            martediColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+martediColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)

            })
            martediPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+martediPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            martediCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+martediCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            martediSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+martediSpuntiniPeso[index]+"</td>" +
                    "</tr>"
                $("#bodySpuntini").append(str)

            })
            break
        case "mercoledì":
            mercolediColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+mercolediColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)

            })
            mercolediPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+mercolediPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            mercolediCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+mercolediCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            mercolediSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+mercolediSpuntiniPeso[index]+"</td>" +
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
        case "venerdì":
            venerdiColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+venerdiColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)

            })
            venerdiPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+venerdiPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            venerdiCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+venerdiCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            venerdiSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+venerdiSpuntiniPeso[index]+"</td>" +
                    "</tr>"
                $("#bodySpuntini").append(str)

            })
            break
        case "sabato":
            sabatoColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+sabatoColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)

            })
            sabatoPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+sabatoPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            sabatoCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+sabatoCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            sabatoSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+sabatoSpuntiniPeso[index]+"</td>" +
                    "</tr>"
                $("#bodySpuntini").append(str)

            })
            break
        case "domenica":
            domenicaColazioneIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+domenicaColazionePeso[index]+"</td>" +
                    "</tr>"
                $("#bodyColazione").append(str)

            })
            domenicaPranzoIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+domenicaPranzoPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyPranzo").append(str)

            })
            domenicaCenaIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+domenicaCenaPeso[index]+"</td>" +
                    "</tr>"
                $("#bodyCena").append(str)

            })
            domenicaSpuntiniIngredienti.forEach((itm,index)=>{
                var str=
                    "<tr>" +
                    "<th scope=\"row\">"+itm+"</th>" +
                    "<td>"+domenicaSpuntiniPeso[index]+"</td>" +
                    "</tr>"
                $("#bodySpuntini").append(str)

            })
            break
    }

})