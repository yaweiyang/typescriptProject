class GuPiaoBase {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    public buy(): void {
        console.log("买入股票 %s", this.name);
    }
    public sell(): void {
        console.log("卖出股票 %s", this.name);
    }
}
class GuPiao_A extends GuPiaoBase { }
class GuPiao_B extends GuPiaoBase { }
class GuPiao_C extends GuPiaoBase { }
class Fund {

    private a: GuPiao_A;
    private b: GuPiao_B;
    private c: GuPiao_C;

    constructor() {
        this.a = new GuPiao_A("a股票");
        this.b = new GuPiao_B("b股票");
        this.c = new GuPiao_C("c股票");
    }

    public buy(): void {
        this.a.buy();
        this.b.buy();
        this.c.buy();
    }
    public sell(): void {
        this.a.sell();
        this.b.sell();
        this.c.sell();
    }
}
class ConsoleAction_Facade {
    constructor() {
        this.init();
    }
    private init(): void {
        // let a: GuPiaoBase = new GuPiao_A("a股票");
        // let b: GuPiaoBase = new GuPiao_B("b股票");
        // let c: GuPiaoBase = new GuPiao_C("c股票");
        // a.buy();
        // b.buy();
        // c.buy();


        // a.sell();
        // b.sell();
        // c.sell();

        // 代理的存在使客户不用针对每一支股票 都创建购买和销售的方法
        let fund = new Fund();
        fund.buy();
        fund.sell();
    }
}
new ConsoleAction_Facade();