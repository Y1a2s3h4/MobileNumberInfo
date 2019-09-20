const access_key = "cce2bf7668d0b4d16d2b9a107b3cdd02";
const input_phone = document.getElementById("input_phone");
const submit = document.getElementById("btn-submit");

submit.addEventListener("click",() =>{
    const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `http://apilayer.net/api/validate?access_key=${access_key}&number=+91${input_phone.value}&country_code=&format=1`,
  "true"
);
xhr.onload = function () {
    if (this.status == 200) {

        console.log(this.responseText);
        let phone_num = JSON.parse(this.responseText);

        
            document.getElementById("output").innerHTML = `
            <ul>
                <li>Local Format:         ${phone_num.local_format}</li>
                <li>International Format: ${phone_num.international_format}</li>
                <li>Country:              ${phone_num.country_name}</li>
                <li>Location:             ${phone_num.location}</li>
                <li>Carrier:              ${phone_num.carrier}</li>
                <li>Line Type:            ${phone_num.line_type}</li>
            </ul>
        `;
        
        
    }
}
xhr.send();
});


