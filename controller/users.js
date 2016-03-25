export function *all () {
    this.body = {
        method: this.method
    };
}

export function *get (id) {
    this.body = {
        userId: id
    };
}
