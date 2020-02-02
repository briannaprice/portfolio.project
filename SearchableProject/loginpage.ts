function validate(){
    let un = document.getElementById("usern")["value"];
    let pw = document.getElementById("pword")["value"];
    let valid = false;

    let unArray = ["johndoe", "janedoe", "gindoe"];
    let pwArray = ["john5678", "jane5678", "gin5678"];
    let fnArray = ["John Doe", "Jane Doe", "Gin Doe"]

    for(let i=0; i <unArray.length; i++){
        if((un == unArray[i]) && (pw == pwArray[i])){
            valid = true;
        }
    }
    if(valid){
        alert ("Login was a success");
        document.getElementById("mandatory")["value"] = un;
    }
    else{
        alert("Invalid Username and/or Password. Please try again")
        document.getElementById("pword")["value"] = "";
        document.getElementById("usern")["value"] = "";
        document.getElementById("usern").focus();
    }
}