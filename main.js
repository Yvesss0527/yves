const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  
  navLinks.classList.remove("open");
  
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 500,
});


ScrollReveal().reveal(".about__row:nth-child(1) .about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__row:nth-child(2) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});

/* --- START OF STORE.JS CONTENT (CART LOGIC) --- */

let cart = [];
let total = 0;
const cartItems = document.getElementById('cart-items');

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function displayCart() {
    cartItems.innerHTML = ''; 

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.product + ' - ₱' + item.price;
        cartItems.appendChild(li);
    });

    document.getElementById('cart-total').textContent = total;
}

function submitOrder(event) {
    event.preventDefault(); 

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    let orderSummary = cart.map(item => `₱${item.price} - ${item.product}`).join('\n');

    alert(
        `Thank you, ${name}!\n\n` +
        `--- Order Summary ---\n` +
        `${orderSummary}\n` +
        `Total: ₱${total}\n` +
        `Payment Method: ${payment}\n` +
        `We will ship to: ${address}`
    );

    cart = [];
    total = 0;
    displayCart(); 
    document.querySelector('form').reset();
}

// Apply ScrollReveal to the store components
if (typeof ScrollReveal !== 'undefined') {
    const scrollRevealOptionStore = { 
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".store-header h1", {
      ...scrollRevealOptionStore,
      delay: 300,
    });
    ScrollReveal().reveal(".store-header p", {
      ...scrollRevealOptionStore,
      delay: 500,
    });
    ScrollReveal().reveal(".product", {
        ...scrollRevealOptionStore,
        interval: 200,
        delay: 700,
    });
    ScrollReveal().reveal(".cart", {
      ...scrollRevealOptionStore,
      delay: 1000,
    });
    ScrollReveal().reveal(".order-form", {
      ...scrollRevealOptionStore,
      delay: 1300,
    });
}

/* --- END OF STORE.JS CONTENT (CART LOGIC) --- */