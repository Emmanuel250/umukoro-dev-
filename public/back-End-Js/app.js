// Element
const $orderForm = document.querySelector('#order-Form')
const $firstName = $orderForm.querySelector('#firstName')
const $lastName = $orderForm.querySelector('#lastName')
const $email = $orderForm.querySelector('#email')
const $phone = $orderForm.querySelector('#phone')

$orderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const fname = $firstName.value
    const lname = $lastName.value
    const email = $email.value
    const phone = $phone.value

    fetch('/almost', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ fname, lname, email, phone })
        })
        .then((res) => {
            if (res.status == 400) {
                return window.alert('Your work  not saved Try to use other Email')
            }

            window.open('/congratulations', '_self')
            return res.json()

        })
        .then((data) => {
            //console.log(data)

        })
        .catch((error) => {
            console.log(error)

        })
})