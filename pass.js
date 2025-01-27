
document.getElementById('click').onclick = function()
{
    let userPass = document.getElementById('pass').value;
    output = document.getElementById('results');
    let letterCheck = "";
    let specialCheck = false;
    let numCheck = false;
    let upperCheck = false;

    output.innerHTML = " ";
    if(userPass.length < 8)
    {
        output.innerHTML += "<p>Minimum length: The password must be at least 8 characters long.<p>";
    }

    if(!(userPass.includes("!")) && !(userPass.includes("@")) && !(userPass.includes("#")) 
        && !(userPass.includes("$")) && !(userPass.includes("%")) && !(userPass.includes("^")))
    {
        specialCheck = false;
        output.innerHTML += "<p>Password must include at least one special character (!,@,#,etc.)</p>";
    }
    else specialCheck = true;

    //This for loop iterates over the string the user inputted and checks if any letter inside the string is equal 
    //to an uppercased letter. If there is an uppercase letter it turns upperCheck and outputs an error to the user.
    for(let i = 0; i <= userPass.length-1; i++)
    {
        letterCheck = userPass[i];
        if(letterCheck.toUpperCase() == userPass[i])
        {
            upperCheck = true;
        }

        if(isNaN(letterCheck))
        {
            //nothing happens
        }
        else
        {
            numCheck = true;
        }
    }

    if(upperCheck != true)
    {
        output.innerHTML += "<p>Password must include at least one uppercase letter</p>";
    }

    if(numCheck != true)
    {
        output.innerHTML += "<p>Password must include at least one one numeric digit</p>";
    }

    if(specialCheck == true && numCheck == true && upperCheck == true && userPass.length >= 8)
    {
        output.innerHTML += "<h5>Password Is Valid!!</h5>";
    }
}
