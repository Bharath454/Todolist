var lang = document.getElementsByName ('lang');
var head = document.getElementById ('head');
skill = [];

for (i = 0; i < 11; i = i + 1) {
  lang[i].addEventListener ('click', function () {
    if (event.target.checked) {
      console.log ('checked');
      skill.push (event.target.value);
      head.textContent = skill;
    } else {
      console.log ('unchecked');
      var index = skill.indexOf (event.target.value);
      skill.splice (index, 1);
      head.textContent = skill;
    }
  });
}

function handleclick () {
  const prices = {
    Rice: 60,
    Wheat: 40,
    Sugar: 30,
    Semiya: 25,
    Paruppu: 50,
    Noodles: 15,
    shampuu: 120,
    Maida: 35,
    Masalas: 80,
  };

  let checkboxes = document.querySelectorAll ('input[name="lang"]:checked');
  let selectedItems = Array.from (checkboxes).map (cb => cb.value);

  const head = document.getElementById ('head');
  const price = document.getElementById ('price');
  const qr = document.getElementById ('Qr');

  if (selectedItems.length === 0) {
    head.innerHTML = 'Please select at least one item!';
    price.style.display = 'none';
    qr.style.display = 'none';
    return;
  }

  let billDetails = '';
  let total = 0;

  selectedItems.forEach (item => {
    const itemPrice = prices[item] || 0;
    total += itemPrice;
    billDetails += `${item} - ₹${itemPrice}<br>`;
  });

  head.innerHTML = billDetails;
  price.innerHTML = `<strong>Total: ₹${total}</strong>`;
  price.style.display = 'block';
  qr.style.display = 'block';
}
