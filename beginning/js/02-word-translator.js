
const strHello =  "Hello World translated in ";

let strLanguageCode = prompt("What language are you speaking?")
if (strLanguageCode == "es"){
     document.write( strHello + "Spanish" + "is : Holla Munda" );

} else if (strLanguageCode == "de"){
    document.write( strHello + "German" + "is : Hallo Welt" );

} else if (strLanguageCode == "fr"){
    document.write( strHello + "French" + "is : Bonjout le monde" );

}else  {
    document.write( strHello + "English" + "is : Hello World" );
}
