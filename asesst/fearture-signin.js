var changepage_signup=document.getElementById('link-logup')
changepage_signup.onclick=function(){
    location.href='http://127.0.0.1:5500/sign-up.html'
}

function Validator(options){
    formElement=document.querySelector(options.form)
    
    if (formElement)
    {
        options.rules.forEach(function(rule){
            var inputElemnt=formElement.querySelector(rule.Selector)
            var errorElemnt=inputElemnt.parentElement.querySelector('.form-message')
            if (inputElemnt){
                inputElemnt.onblur=function(){
                    errorMassege=rule.test(inputElemnt.value)
                    if (errorMassege){
                        errorElemnt.innerText=errorMassege
                        inputElemnt.parentElement.classList.add('invalid')
                    } 
                    else {
                        errorElemnt.innerText=''
                        inputElemnt.parentElement.classList.remove('invalid')
                    }

                }
                inputElemnt.oninput=function(){
                    errorElemnt.innerText=''
                    inputElemnt.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}
function Submit_message(options){
    formElement=document.querySelector(options.form)
    console.log(formElement)
    
    if (formElement)
    {
        options.rules.forEach(function(rule){
            var inputElemnt=formElement.querySelector(rule.Selector)
            var submitElemnt=document.getElementById('button-login')
            
            console.log(inputElemnt)
            if (inputElemnt){
                submitElemnt.onclick=function(){
                    errorMassege=rule.test(inputElemnt.value)
                    if (errorMassege){
                        const main=document.getElementById('form-1')
                        const sbms=document.createElement('div')
                        sbms.classList.add('container_sbms')
                        sbms.innerHTML=`<div class="form_sbms--error">
                        <i class="fa-solid fa-circle-exclamation" id="icon_error"></i>
                        <p style="font-size:10px;text-align: center;font-family:monospace">Registration failed please <br> re-enter the infomation</p>
                        <button id="btcanl" class="button__error">OK</button>
                        </div>`
                        main.appendChild(sbms)
                        var btcc=document.getElementById('btcanl')
                        btcc.onclick=function(){
                            main.removeChild(sbms)
                            
                        }
                    } else {
                        const main=document.getElementById('form-1')
                        const sbms=document.createElement('div')
                        sbms.classList.add('container_sbms')
                        sbms.innerHTML=`<div class="form_sbms--success">
                        <i class="fa-solid fa-thumbs-up" id="icon_success"></i>
                        <p style="font-size:10px;text-align: center;font-family:monospace">Successfully registered<br>an account at web HT^2P</p>
                        <button id="btcanl" class="button__success">OK</button>
                        </div>`
                        main.appendChild(sbms)
                        var btcc=document.getElementById('btcanl')
                        btcc.onclick=function(){
                            main.removeChild(sbms)
                            location.href='http://127.0.0.1:5500/cosmetic.html'
                    }
                    }
                    
                }
            }
        })
    }
}
Validator.isRequired=function(selector){
    return{
        Selector: selector,
        test: function(value){
            return value.trim() ? undefined: 'enter to this place, please'
        }

    };
}

Validator.isPassword=function(selector)
{
    return {
        Selector: selector,
        test: function(value){
            if (value.length>=8){
                return undefined
            } else return 'Password have to length from 8 character'
        }
    }
}

