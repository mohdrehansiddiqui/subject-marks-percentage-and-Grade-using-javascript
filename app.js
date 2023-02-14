var comNum = 90
var engNum = 90
var urduNum = 60
var mathNum = 60
var islaNum = 60
var total= comNum + engNum + urduNum + mathNum + islaNum
var perC=total/500*100
var Grade=perC;

document.write("<table border=2>")

document.write("<tr>")
document.write("<td>")
document.write("Computer")
document.write("</td>")
document.write("<td>")
document.write(comNum)
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("English")
document.write("</td>")
document.write("<td>")
document.write(engNum)
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("Urdu")
document.write("</td>")
document.write("<td>")
document.write(urduNum)
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("Math")
document.write("</td>")
document.write("<td>")
document.write(mathNum)
document.write("</td>")
document.write("</tr>")


document.write("<tr>")
document.write("<td>")
document.write("Islamiat")
document.write("</td>")
document.write("<td>")
document.write(islaNum)
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("total")
document.write("</td>")
document.write("<td>")
document.write(total)
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("Percentage")
document.write("</td>")
document.write("<td>")
document.write(perC)
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("Grade")
document.write("</td>")
document.write("<td>")
if (Grade>=80){
    document.write("Your AOne")
}else if(Grade>=70){
    document.write("Your A")
}else if(Grade>=60){
    document.write("Your B")
}else if(Grade>=50){
    document.write("Your C")
}
else if(Grade>=40){
    document.write("Your D")
}else if(Grade>=30){
    document.write("Your Failed")
}else{
    document.write("Enter Valid Number")
}
document.write("</td>")
document.write("</tr>")

document.write("</table>")

