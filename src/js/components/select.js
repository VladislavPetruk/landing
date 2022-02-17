const select = () => {
  const element = document.querySelector('.header__select');
  const choices = new Choices(element, {
    searchEnabled: false,
  })
}

select();
