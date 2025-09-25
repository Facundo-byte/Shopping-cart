# Shopping Cart

A shopping cart project built with **React**, **Vite**, and **Tailwind CSS**.  
It allows adding and removing products, displaying the cart item count, and toggling between light/dark mode.  
The project is optimized to work on both **mobile devices and desktop computers**.

---

## You can try it out here!

https://shopping-cart-eosin-nine.vercel.app/

[Video Demo](https://youtu.be/QUJ1b-XzYUU)

---

## Screenshots

<div style="display: flex; flex-wrap: wrap; width: 500px;">
  <img src="https://github.com/user-attachments/assets/5a3dce01-e932-4491-91f2-95eb07c4403f" alt="Screenshot 1" width="500" height="300"/>
  <img src="https://github.com/user-attachments/assets/0f11480f-092d-4cbb-8d93-6ec21b3dc69c" alt="Screenshot 2" width="500" height="300"/>
  <img src="https://github.com/user-attachments/assets/a1680038-532d-41fb-8292-de32566a391a" alt="Screenshot 3" width="500" height="300"/>
  <img src="https://github.com/user-attachments/assets/153c3201-be40-446c-a21d-cdae9a99d10b" alt="Screenshot 4" width="500" height="300"/>
</div>

---

## Features

- ⚡ Modern setup with React + Vite  
- 🌓 Light / Dark theme  
- 🛍 Floating cart that appears on scroll  
- 🌐 Navigation using React Router  
- 🎨 Responsive UI with Tailwind CSS  
- 🎞 Animations with **framer-motion**  
- 📦 Global state management with Context API  
- 🤳 Optimized for mobile devices

---

## Basic Usage

1. Browse the product catalog (e.g., movies).  
2. Click **Add to Cart** to increase the quantity.  
3. The cart in the header displays the current number of items.  
4. When scrolling down and the header disappears, a **floating cart** appears in the corner for quick access.  
5. Toggle between light and dark modes at any time.  
6. Click the header cart or floating cart to navigate to the cart page.

---

## Technologies Used

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/)  
- [React Router DOM](https://reactrouter.com/)  
- Context API for state management  
- JavaScript (ES6+)  

---

## Project Structure
```text
Shopping-cart/
├── public/ # Static assets (images, icons, etc.)
├── src/
│ ├── components/ # Reusable UI components (Header, Footer, ItemCard, etc.)
│ ├── contexts/ # Context providers for state management
│ ├── pages/ # Main pages (Home, Cart, etc.)
│ ├── styles/ # Tailwind CSS and custom styles
│ ├── App.jsx # Main App component
│ └── main.jsx # Entry point
├── tailwind.config.js # Tailwind configuration
├── vite.config.js # Vite configuration
└── package.json # Project metadata and dependencies
```
