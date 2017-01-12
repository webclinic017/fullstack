Vue.component('count', {
    props: {
        countDown: {
            type: Object,
            default: function () {
                return {text: 'aaaa'};
            }
        },
        sendCode: {
            type: null
        }
    },
    template: '<div><slot></slot><br><a @click="sendCode">test</a></div>',
    data: function () {
        return {
            countDown: this.countDown
        };
    },
    methods: {
        test: function () {
            console.info(this.countDown);
            this.countDown.show = true;
        }
    },
    watch: {
        countDown: {
            handler: function (val) {
                console.info(val, 123);
            },
            deep:true
        }
    }
});