module.exports = {
    routes: [
        {
            method: "POST",
            path: "/payment-order",
            handler: "order.paymentOrder" // Make sure this path matches the correct structure
        }
    ],
}