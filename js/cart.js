const cart = () => {
  const buttonCart = document.getElementById("cart-button");
  const modalCart = document.querySelector(".modal-cart");
  const close = document.querySelector(".close");
  const body = document.querySelector(".modal-body");

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
    cartArray.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count > 0 ? item.count - 1 : 0;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const renderItems = (data) => {
    body.innerHTML = "";
    data.forEach(({ name, price, id, count }) => {
      //   console.log(cartItem);
      const cartElem = document.createElement("div");
      cartElem.classList.add("food-row");
      cartElem.innerHTML = `
                <span class="food-name">${name}</span>
                <strong class="food-price">${price} ₽</strong>
                <div class="food-counter">
                    <button class="counter-button btn-dec" data-index="${id}">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button btn-inc" data-index="${id}">+</button>
                </div>
          `;

      // cartElem.querySelector(".btn-dec").addEventListener("click", () => {
      //   decrementCount(id);
      // });

      // cartElem.querySelector(".btn-inc").addEventListener("click", () => {
      //   incrementCount(id);
      // });

      body.append(cartElem);
      //   console.log(cartElem);
    });
  };

  body.addEventListener('click',(e)=>{
e.preventDefault()
if (e.target.classList.contains('btn-inc')){
  incrementCount(e.target.dataset.index);

}else if (e.target.classList.contains('btn-dec')){
  decrementCount(e.target.dataset.index)
}
  })

  buttonCart.addEventListener("click", () => {
    if (localStorage.getItem("cart")) {
      renderItems(JSON.parse(localStorage.getItem("cart")));
    }
    modalCart.classList.add("is-open");
  });

  close.addEventListener("click", () => {
    modalCart.classList.remove("is-open");
  });
};

cart();

// const buttonCart = document.getElementById('cart-button')
// console.log(buttonCart);
// // buttonCart1.addEventListener('click',()=>{
// //     console.log('1111');})
