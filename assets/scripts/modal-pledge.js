// let menuOpen = document.querySelector('.menu-open')
// let menuClose = document.querySelector('.menu-close')
// let menu = document.querySelector('.nav')
// let mobileOverlay = document.querySelector('.mobile-overlay')

// let btnBookmark = document.querySelector('.cta-bookmark')

// let radioBtn = document.querySelectorAll('.radio-btn')

// let ctaCardBtns = document.querySelectorAll('.card-cta')
// let ctaMainBtn = document.querySelector('.cta-project')
// let overlay = document.querySelector('.overlay')
// let mainModal = document.querySelector('.modal-form')
// let thanksModal = document.querySelector('.modal-thanks')
// let totalMoney = document.querySelector('.total-money')
// let totalBackers = document.querySelector('.total-backers')
// let progressBar = document.querySelector('.progress-bar')
// let amount = 89914;
// let backers = 5007;
// // window.onload = function() {
// //     totalMoney.textContent += Number(amount).toLocaleString()
// //     totalBackers.textContent = Number(backers).toLocaleString()
// //     progressBar.style.width = amount / 1000 + '%'
// //   };

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     let inputs = document.querySelectorAll('.input-amount')

//     if (radioBtn[0].checked) {
//         backers++;
//         totalBackers.innerHTML = Number(backers).toLocaleString()
//         closeModal(mainModal)
//         openModal(thanksModal)

//     } else if(radioBtn[1].checked) {

//         if (inputs[0].value =='' || inputs[0].value < 25) {
//             alert('Amount can not be less than 25$.')
//         } else if (Number(inputs[0].value) > (100000 - amount)) {
//             alert('More than we need!')
//         } else {
//             backers++;
//             totalBackers.innerHTML = Number(backers).toLocaleString()
//             amount += Number(inputs[0].value)
//             totalMoney.innerHTML = "<span>&#36;</span>" + Number(amount).toLocaleString()
//             progressBar.style.width = amount / 1000 + '%'
//             closeModal(mainModal)
//             openModal(thanksModal)
//         }
//     } else if(radioBtn[2].checked) {
//         if (inputs[1].value =='' || inputs[1].value < 75) {
//             alert('Amount can not be less than 75$.')
//         } else if (Number(inputs[1].value) > (100000 - amount)) {
//             alert('More than we need!')
//         } else {
//             backers++;
//             totalBackers.innerHTML = Number(backers).toLocaleString()
//             amount += Number(inputs[1].value)
//             totalMoney.innerHTML = "<span>&#36;</span>" + Number(amount).toLocaleString()
//             progressBar.style.width = amount / 1000 + '%'
//             closeModal(mainModal)
//             openModal(thanksModal)
//         }
//     }

// })
// function active(elem) {
//     elem.style.display = 'block'
// }
// function inActive(elem) {
//     elem.style.display = 'none'
// }
// function openMenu() {
//     inActive(menuOpen)
//     active(menuClose)
//     active(menu)
//     active(mobileOverlay)
// }
// function closeMenu() {
//     active(menuOpen)
//     inActive(menuClose)
//     inActive(menu)
//     inActive(mobileOverlay)
// }
// function openModal(modal) {
//     active(overlay)
//     active(modal)
// }
// function closeModal(modal) {
//     inActive(overlay)
//     inActive(modal)
// }

// menuOpen.addEventListener('click', openMenu)
// menuClose.addEventListener('click', closeMenu)

// btnBookmark.addEventListener('click', () => {
    
//     btnBookmark.classList.toggle('bookmarked')
// })

// radioBtn.forEach((btn) => {
//     btn.addEventListener('click', borderColor)
// })
// function borderColor(e) {
//     document.querySelectorAll('.selected').forEach((select) => {
//         select.classList.remove('selected')
//     })
//     let selected =  e.target.parentNode
//     selected.classList.add('selected')
// }



// ctaMainBtn.addEventListener('click', () => {openModal(mainModal)})

// ctaCardBtns.forEach(btn => {
//     btn.addEventListener('click', ()=>{openModal(mainModal)})})

// document.querySelector('.modal-close').addEventListener('click', () => {closeModal(mainModal)})

// document.querySelector('.modal-thanks-btn').addEventListener('click', ()=>{closeModal(thanksModal)})