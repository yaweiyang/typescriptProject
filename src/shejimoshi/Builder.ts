class Product {
    parts: Array<string> = [];
    // public
    constructor() {
        this.init();
    }
    private init(): void {
        let func = function (m: number, n: number): any {
            if (m == 0) {
                return n + 1;
            } else if (m > 0 && n == 0) {
                return func(m - 1, 1);
            } else if (m > 0 && n > 0) {
                return func(m - 1, func(m, n - 1));
            } else {
                return 0;
            }
        }
        console.log("输出结果为：", func(3, 4));
    }
}
new Product();