let helpers = {
    formatPrice: function (rate) {
        const rateInCents = rate/100;
        return rateInCents.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2});
    },
    formatDate: function (date) {
        var formattedDate = new Date(date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
        if (formattedDate) {
            return formattedDate;
        }
    },
    getToday: function () {
        const today = new Date();
        const yyyy = today.getFullYear();
        let dd = today.getDate();
        let mm = today.getMonth()+1;

        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
        return yyyy+'-'+mm+'-'+dd;
    },
    localStorageSupport: function () {
        const localStorageTest = 'test';
        try {
            localStorage.setItem(test, localStorageTest);
            localStorage.removeItem(test);
            return true;
        } catch(e) {
            return false;
        }
    }
};

export default helpers;