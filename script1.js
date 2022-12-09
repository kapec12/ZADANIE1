function oblicz()
{
    var d1=document.getElementById("dz").value;
    var d2=document.getElementById("dor").value;
    if (!isNaN(d1) && !isNaN(d2))
    {
        var koszt=d1*80+d2*250;
        document.getElementById("wynik").innerHTML= "Cennik biletów: <br> Dzieci 6-18 lat = 80 zł <br> Osoby dorosłe 250 zł <br> Twoje podsumowanie wynosi: "+koszt+"zł";
    }
}