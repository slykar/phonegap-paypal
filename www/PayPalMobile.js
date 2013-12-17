var PayPalMobile = {

    /**
     * Defines your payment
     *     // A Coffe Mug for $1.99
     *     var payment = new PayPal.Payment(1.99, 'USD', 'Coffe Mug');
     *
     * @param {float}  amount           Payment amount in currency
     * @param {string} currency         Valid PayPal currency code
     * @param {string} shortDescription Short description of the payment
     */
    Payment: function (amount, currency, shortDescription) {
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
    },

    /**
     * Get version
     * @param  {Function} success Success callback
     * @param  {Function} fail    Fail callback
     */
    version: function (success, fail) {
        cordova.exec(success, fail, "PayPalMobile", "version", []);
    },

    /**
     * Set PayPal environment type
     * @param {string}   environment
     * @param {Function} success
     * @param {Function} fail
     */
    setEnvironment: function(environment, success, fail) {
        cordova.exec(success, fail, "PayPalMobile", "setEnvironment", [environment]);
    },

    environment: function(success, fail) {
      cordova.exec(success, fail, "PayPalMobile", "environment", []);
    },

    prepareForPayment: function(clientId, success, fail) {
        cordova.exec(success, fail, "PayPalMobile", "prepareForPayment", [clientId]);
    },

    presentPaymentUI: function(clientId, email, payerId, payment, complete, cancel) {
        cordova.exec(complete, cancel, "PayPalMobile", "presentPaymentUI", [clientId, email, payerId, payment]);
    }

};

module.exports = PayPalMobile;