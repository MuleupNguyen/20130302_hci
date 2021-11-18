function dateForm() {
    const elementDay = document.querySelector('.day-form')
    const elementMonth = document.querySelector('.month-form')
    const elementYear = document.querySelector('.year-form')

    for(var i = 1; i < 32; i++) {
        var option = document.createElement("OPTION");
        var number = document.createTextNode(i);
        option.appendChild(number);
        elementDay.appendChild(option);
    }
    for(var i = 1; i < 13; i++) {
        const option = document.createElement("OPTION");
        const number = document.createTextNode(i);
        option.appendChild(number);
        elementMonth.appendChild(option);
    }
    for(var i = 1980; i < 2022; i++) {
        const option = document.createElement("OPTION");
        const number = document.createTextNode(i);
        option.appendChild(number);
        elementYear.appendChild(option);
    }
}

window.onscroll = function() {
    const getElement =  document.querySelector('.navbar-labs');
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        getElement.style.display = 'block';
    }else {
        getElement.style.display = 'none';
    }
}

function checked() {
    const elements = document.querySelectorAll('.check')
    elements.forEach((element) => {
        element.onclick = () => {
            const parent = element.querySelector('.sex-form') 
            parent.checked = true;
        }
    })
}


// input warning
function borderRed(input) {
    return input.style.border = '1px solid red'
}

function borderGreen(input) {
    return input.style.border = '1px solid #00a400'
}

function borderGray(input) {
    return input.style.border = '1px solid #8F8F8F'
}

function displayBlock() {
    const passwordNote = document.querySelector('.password-note')
    return passwordNote.style.display = 'block'
}

function displayNone() {
    const passwordNote = document.querySelector('.password-note')
    return passwordNote.style.display = 'none'
}

function inputWarning() {
    const inputs = document.querySelectorAll('.input-warning')
    inputs.forEach((input, index) => {
        input.onblur = () => {
            if(input.value.trim().length < 6 && index == 3){
                borderRed(input)
                displayBlock(input)
            }else if(input.value.trim().length > 0) { 
                displayNone()
            }else {
                borderRed(input)
            }
        }

        input.oninput = () => {
            if(input.value.trim().length < 6 && index == 3) {
                displayBlock()
                borderRed(input)
            }else {
                borderGreen(input)
                displayNone()
            }
        } 
    })
}


// submit form
function submit() {
    const firstName = document.querySelector('.first-name')
    const lastName = document.querySelector('.last-name')
    const email = document.querySelector('.phone-or-email')
    const password = document.querySelector('.password')
    const day = document.querySelector('.day-form')
    const month = document.querySelector('.month-form')
    const year = document.querySelector('.year-form')
    const checks = document.querySelectorAll('.sex-form')

    checks.forEach((check) => {
        if(check.checked) {
            sex = check.value
        }
    })

    const arrValue = {
        firstName : firstName.value ,
        lastName : lastName.value ,
        email : email.value ,
        password : password.value,
        day : day.value ,
        month : month.value ,
        year : year.value ,
        sex
    }
    
    if(firstName.value.trim().length > 0 && lastName.value.trim().length > 0 
        && email.value.trim().length > 0 && password.value.trim().length >= 6) {
        valueForm(arrValue)
    } else {
        if(firstName.value.trim().length === 0) borderRed(firstName)
        if(lastName.value.trim().length === 0) borderRed(lastName)
        if(email.value.trim().length === 0) borderRed(email )
        if(password.value.trim().length < 6) {
        borderRed(password)
        displayBlock()
        }
    }

}

function updateSTT() {
    const table = document.querySelector('.content-table')
    const trs = document.querySelectorAll('tr')
    for(let i=1; i <trs.length; i++) {
        table.rows[i].cells[0].innerHTML = i
    }
}

function valueForm(arrValue) {
    const tr = document.querySelector('.tr-body')
    const inputs = document.querySelectorAll('.input-warning')
    const element = document.createElement('TR');
    element.innerHTML = `
        <td>1</td>
        <td>${arrValue.firstName} ${arrValue.lastName}</td>
        <td>${arrValue.email}</td>
        <td>${arrValue.day}/${arrValue.month}/${arrValue.year}</td>
        <td>${arrValue.sex}</td>
        <td>
        <i class="fas fa-cog" onclick="system(this)"></i>
        <i class="far fa-trash-alt" onclick="onDelete(this)"></i>
        </td>
    `
    tr.appendChild(element);
    updateSTT()
    
    inputs.forEach(input => {
        input.value = ""
        borderGray(input)
    })
}

// function system(td) {
//     row = td.parentElement.parentElement;
//     console.log(row.cells[1]);
// }

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.querySelector('.tr-body').deleteRow(row.rowIndex)
    updateSTT()
}




dateForm();
checked();
inputWarning();