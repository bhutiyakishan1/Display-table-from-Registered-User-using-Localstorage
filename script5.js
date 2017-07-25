
var userarr = [];

function dltObj() {
    if (document.getElementById("removee")) {
        document.querySelector("#removee").remove();
    }
}

    function register() {
        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById('lastname').value;
        var uname = document.getElementById('username').value;
        var eml = document.getElementById('email').value;
        var pwd = document.getElementById('password').value;
        var genderM = document.getElementById('male');
        var genderF = document.getElementById('female');
        var childNode;



        if (fname === '') {
            document.getElementById('form1').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Firstname cannot be empty</p>");

        } else {
            if (lname === "") {
                document.getElementById('form2').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Lastname cannot be empty</p>");

            }
            else {
                if (uname === "") {

                    document.getElementById('form3').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Username cannot be empty</p>");
                } else {
                    if (eml === "") {

                        document.getElementById('form4').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Email cannot be empty</p>");
                    } else {
                        if (pwd === "") {

                            document.getElementById('form5').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Password cannot be empty</p>");
                        } /*else {
                            if (genderM.checked == false && genderF.checked == false) {

                                document.getElementById('form6').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'> Please select the gender</p>");
                                return false;

                            }*/
                            else {
                                var userobj = {
                                    Firstname: fname,
                                    Lastname: lname,
                                    UserId: uname,
                                    Email: eml
                                }
                                userarr.push(userobj);
                                localStorage.setItem("userList", JSON.stringify(userarr));
                                loctable();
                                regForm.reset();
                            }

                    }
                }
            }
        }
return true;
    }

    function loctable() {
        if (localStorage.userList) {


            userarr = JSON.parse(localStorage.userList);

            var render = document.getElementById('table').innerHTML;
            render = "";

            render = "<tr><th>First name</th><th>Last name</th><th>User id</th><th>Email</th></tr>";


            for (var i = 0; i < userarr.length; i++) {

                var fn = userarr[i].Firstname;
                var ln = userarr[i].Lastname
                var un = userarr[i].UserId;
                var ed = userarr[i].Email;


                render += "<tr><td>" + fn + "</td>";
                render += "<td>" + ln + "</td>";
                render += "<td>" + un + "</td>";
                render += "<td>" + ed + "</td></tr>";


            }

            document.getElementById('table').innerHTML = render;

        }

    }









 //document.getElementById('regForm').addEventListener('submit', register, false);