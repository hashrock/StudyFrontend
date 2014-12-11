// Some Mocha tests
// using a non-standalone build of the project
describe('my-component', function () {

    // require exposed internal module
    var myComponent = require('my-project/src/my-component')
    it('should have a created hook', function () {
        assert.equal(typeof myComponent.created, 'function')
    })
    it('should set message in the created hook', function () {
        var mock = {}
        myComponent.created.call(mock)
        assert.equal(mock.message, 'hello!')
    })
})