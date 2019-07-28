function generate()
{
    


    var name=document.getElementById("name").value;
    document.getElementById("pname").innerHTML=name;

    var ecode=document.getElementById("ecode").value;
    document.getElementById("pcode").innerHTML=ecode;

    var sem=document.getElementById("sem").value;
    document.getElementById("psem").innerHTML=sem;

    var sname1=document.getElementById("sname1").value;
    document.getElementById("sub1").innerHTML=sname1;

    var sname2=document.getElementById("sname2").value;
    document.getElementById("sub2").innerHTML=sname2;
 

    var sname3=document.getElementById("sname3").value;
    document.getElementById("sub3").innerHTML=sname3;


    var sname4=document.getElementById("sname4").value;
    document.getElementById("sub4").innerHTML=sname4;

    var sname5=document.getElementById("sname5").value;
    document.getElementById("sub5").innerHTML=sname5;

    var sname6=document.getElementById("sname6").value;
    document.getElementById("sub6").innerHTML=sname6;

    var smarks1=document.getElementById("smarks1").value;
    document.getElementById("pmark1").innerHTML=smarks1;

    var smarks2=document.getElementById("smarks2").value;
    document.getElementById("pmark2").innerHTML=smarks2;

    var smarks3=document.getElementById("smarks3").value;
    document.getElementById("pmark3").innerHTML=smarks3;

    var smarks4=document.getElementById("smarks4").value;
    document.getElementById("pmark4").innerHTML=smarks4;

    var smarks5=document.getElementById("smarks5").value;
    document.getElementById("pmark5").innerHTML=smarks5;

    var smarks6=document.getElementById("smarks6").value;
    document.getElementById("pmark6").innerHTML=smarks6;

    var stotal1=document.getElementById("stotal1").value;
    document.getElementById("ptotal1").innerHTML=stotal1;

    var stotal2=document.getElementById("stotal1").value;
    document.getElementById("ptotal2").innerHTML=stotal2;

    var stotal3=document.getElementById("stotal3").value;
    document.getElementById("ptotal3").innerHTML=stotal3;

    var stotal4=document.getElementById("stotal4").value;
    document.getElementById("ptotal4").innerHTML=stotal4;

    var stotal5=document.getElementById("stotal5").value;
    document.getElementById("ptotal5").innerHTML=stotal5;

    var stotal6=document.getElementById("stotal6").value;
    document.getElementById("ptotal6").innerHTML=stotal6;


    var g1=grade(smarks1,stotal1);
    var g2=grade(smarks2,stotal2);
    var g3=grade(smarks3,stotal3);
    var g4=grade(smarks4,stotal4);
    var g5=grade(smarks5,stotal5);
    var g6=grade(smarks6,stotal6);

    document.getElementById("pgrade1").innerHTML=g1;

    document.getElementById("pgrade2").innerHTML=g2;

    document.getElementById("pgrade3").innerHTML=g3;

    document.getElementById("pgrade4").innerHTML=g4;

    document.getElementById("pgrade5").innerHTML=g5;

    document.getElementById("pgrade6").innerHTML=g6;



    if(name && ecode && sem && sname1 && sname2 && sname3 && sname4 && sname5 && sname6 && smarks1 && smarks2 && smarks3 && smarks4 && smarks5 && smarks6 && stotal1 && stotal2 && stotal3 && stotal4 && stotal5 && stotal6)
        document.getElementById("marklist").style.visibility="visible";
    else
        alert("ERROR: Please Enter Everything!")


    if(g1=="F" || g2=="F" || g3=="F" || g4=="F" || g5=="F" || g6=="F")
        document.getElementById("Failed").innerHTML="Failed"
    else
        document.getElementById("Passed").innerHTML="Passed"
}


function grade(mark, total)
{
    var g;
    var percent=mark*100/total;
    if (percent>=95)
        g="S";
    else if (percent>=90)
        g="A+";
    else if (percent>=85)
        g="A";
    else if (percent>=80)
        g="B+";
    else if (percent>=75)
        g="B";
    else if (percent>=70)
        g="C+";
    else if (percent>=65)
        g="C";
    else if (percent>=60)
        g="D+";
    else if (percent>=55)
        g="D";
    else if (percent>=50)
        g="E";
    else
        g="F";
    return (g);


}