var Cookies = {
    get all() {
        return Object.fromEntries(new URLSearchParams(document.cookie.replaceAll("; ", "&")))
    },
    get length() {
        return Object.entries(this.all).length
    },
    get(key) {
        if (!key) {
            return console.error(new Error("Needs key argument"))
        }

        var item = Object.entries(this.all).filter(item => item[0] == key)[0]
        return item ? item[1] : null;
    },
    has(key) {
        if (!key) {
            return console.error(new Error("Needs key argument"))
        }

        return this.get(key) ? true : false
    },
    set(key, value) {
        if (!key || !value) {
            return console.error(new Error("Needs key or value arguments"))
        }

        document.cookie = key + "=" + value
        return {[key]: value}
    },
    remove(key) {
        if (!key) {
            return console.error(new Error("Needs key argument"))
        }

        document.cookie = key + "=;Max-Age=0"
    },
    clear() {
        Object.entries(this.all).forEach(item => {
            this.remove(item[0])
        })
    }
}
