document.addEventListener('DOMContentLoaded', () => {
    const updateAddressBtn = document.getElementById('update-address-btn');
    updateAddressBtn.addEventListener('click', () => {
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const pinCode = document.getElementById('pin-code').value;

        const data = {
            address: address,
            city: city,
            pin_code: pinCode
        };

        fetch('/user/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response =>I apologize for the incomplete response. Here's the complete JavaScript code for the user page:

JavaScript (user.js):
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const updateAddressBtn = document.getElementById('update-address-btn');
    updateAddressBtn.addEventListener('click', () => {
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const pinCode = document.getElementById('pin-code').value;

        const data = {
            address: address,
            city: city,
            pin_code: pinCode
        };

        fetch('/user/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle successful address update
            })
            .catch(error => console.error(error));
    });

    const getUserInfoBtn = document.getElementById('get-user-info-btn');
    getUserInfoBtn.addEventListener('click', () => {
        fetch('/user/info')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Update the user info fields with the received data
                document.getElementById('aadhar-verified').value = data.aadhar_verified;
                document.getElementById('country-code').value = data.country_code;
                document.getElementById('email').value = data.email;
                document.getElementById('email-verified').value = data.email_verified;
            })
            .catch(error => console.error(error));
    });

    const updateNameBtn = document.getElementById('update-name-btn');
    updateNameBtn.addEventListener('click', () => {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;

        const data = {
            firstname: firstName,
            secondname: lastName
        };

        fetch('/user/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle successful name update
            })
            .catch(error => console.error(error));
    });

    const updateUsernameBtn = document.getElementById('update-username-btn');
    updateUsernameBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;

        const data = {
            user_name: username
        };

        fetch('/user/username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle successful username update
            })
            .catch(error => console.error(error));
    });
});
