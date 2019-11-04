var a = 5;
obj = {
    a: 10,
    logA: () => console.log(this.a)
}

obj.logA()