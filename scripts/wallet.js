// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch wallet data from API
//     fetch('/wallet/address/v2')
//         .then(response => response.json())
//         .then(data => {
//             const addressInput = document.getElementById('address');
//             addressInput.value = data.address;
//         })
//         .catch(error => console.error(error));

//     fetch('/wallet/allAddresses/v2')
//         .then(response => response.json())
//         .then(data => {
//             const allAddressesInput = document.getElementById('all-addresses');
//             allAddressesInput.value = data.allAddresses.join('\n');
//         })
//         .catch(error => console.error(error));

//     fetch('/wallet/balance')
//         .then(response => response.json())
//         .then(data => {
//             const balanceInput = document.getElementById('balance');
//             balanceInput.value = data.balance;
//         })
//         .catch(error => console.error(error));

//     // Create wallet button event listener
//     const createWalletBtn = document.getElementById('create-wallet-btn');
//     createWalletBtn.addEventListener('click', () => {
//         fetch('/wallet/create', {
//             method: 'POST'
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 // Handle successful wallet creation
//             })
//             .catch(error => console.error(error));
//     });

//     // Send coins button event listener
//     const sendCoinsBtn = document.getElementById('send-coins-btn');
//     sendCoinsBtn.addEventListener('click', () => {
//         fetch('/wallet/send', {
//             method: 'POST'
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 // Handle successful coin sending
//             })
//             .catch(error => console.error(error));
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    fetch('/wallet/address/v2')
        .then(response => response.json())
        .then(data => {
            const addressTextarea = document.getElementById('address');
            addressTextarea.value = data.addresses.join('\n');
        })
        .catch(error => console.error(error));

    fetch('/wallet/allAddresses/v2')
        .then(response => response.json())
        .then(data => {
            const allAddressesTextarea = document.getElementById('all-addresses');
            allAddressesTextarea.value = data.allAddresses.join('\n');
        })
        .catch(error => console.error(error));

    fetch('/wallet/balance')
        .then(response => response.json())
        .then(data => {
            const balanceInput = document.getElementById('balance');
            balanceInput.value = data.balance;
        })
        .catch(error => console.error(error));

    const createWalletBtn = document.getElementById('create-wallet-btn');
    createWalletBtn.addEventListener('click', () => {
        fetch('/wallet/create', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle successful wallet creation
            })
            .catch(error => console.error(error));
    });

    const sendCoinsBtn = document.getElementById('send-coins-btn');
    sendCoinsBtn.addEventListener('click', () => {
        fetch('/wallet/send', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle successful coin sending
            })
            .catch(error => console.error(error));
    });
});
