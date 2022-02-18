const form = document.querySelector('.form');
const inputTel = form.querySelector('input[type=tel]');

const inputMask = new Inputmask('+38 (999) 999-99-99');
inputMask.mask(inputTel);

new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = inputTel.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#db4040',
  messages: {
    name: {
      required: 'Enter name',
      minLength: 'Please enter 3 or more characters',
      maxLength: 'It is forbidden to enter more than 15 characters'
    },
    email: {
      email: 'Please enter a valid email',
      required: 'Enter email'
    },
    tel: {
      required: 'Enter phone',
      function: 'It should be 10 characters without +38'
    }
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})
