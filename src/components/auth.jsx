class PrivateRoute {

    constructor() {
        this.authenticated = false
    }

    login(cb) {
        this.authenticated = true
        return (cb)
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new PrivateRoute();