Vue.directive('countDown', {
    deep: true,
    update: function (newVal, oldVal) {
        // console.info(newVal, oldVal);
        // console.log(this.el);
        // console.log(this.arg);
        // console.log(this.name);
        // console.log(this.expression);  
        var text = newVal.message;

        if (newVal.show) {
            newVal.show = false;
            newVal.message = 60;
            var timer = setInterval(function () {
                newVal.message--;

                if (newVal.message <= 0) {
                    newVal.message = text;
                    newVal.noClick = false;
                    clearInterval(timer);
                }
            }, 1000);
        }
    }
});