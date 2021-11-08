const cart = () => {
  const buttonCart = document.getElementById("cart-button");
  const modalCart = document.querySelector(".modal-cart");
  const close = document.querySelector(".close");
  const body = document.querySelector(".modal-body");

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
                    <button class="counter-button btn-dec">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button btn-inc">+</button>
                </div>
          `;
      body.append(cartElem);
      //   console.log(cartElem);
    });
  };

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