import React, { useState } from 'react';
import emailjs from 'emailjs-com'


function Email(props) {
    //console.log(formTemplate)
    const [emailSent, setMail] = useState("");
    emailjs.send('service_erba51m', 'template_0c80u7q', props.templateParams, 'user_o8d4kOT06ByD2WS3U2OI7')
        .then(function (response) {
            setMail(response.text.toString());
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            setMail(error);
            console.log('FAILED...', error);
        });
       return(
           <div>{emailSent}</div>
       )
   
}

export default Email;