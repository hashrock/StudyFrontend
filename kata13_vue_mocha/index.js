var Vue = require('vue')
var app = new Vue({
    el: '#app',
    data: { /* ... */ },
    components: {
        'my-component': require('./my-component')
    }
})