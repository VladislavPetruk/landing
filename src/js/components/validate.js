import JustValidate from 'just-validate';
const form = document.querySelector('.form');
const inputTel = form.querySelector('input[type=tel]');

const inputMask = new Inputmask('+38 (999) 999-99-99');
inputMask.mask(inputTel);


const validation = new JustValidate('#form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter name!'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter email!',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Please enter a valid email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter phone!',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = inputTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Please enter a valid phone',
    },
  ]).onSuccess((event) => {

    let formData = new FormData(event.target);

    let title = document.querySelector('.modal__item-title').textContent;
    let price = document.querySelector('.modal__item-price span').textContent;
    formData.append('Plan', `${title}`);
    formData.append('Sum', `${price}`);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('Message sent');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
