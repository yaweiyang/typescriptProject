let writeMode: Function = function (name: string): void {
    console.log("***************" + name + "***************");
}
abstract class ConsoleActionBase {
    total: number = 0;
    cashTypes: string[] = ["正常收费", "满300返100", "打八折"];
    messages: string[] = [];

    public abstract ClickEvent(evt?: any): void;

    protected randomCashType(): string {
        let index: number = Math.floor(Math.random() * this.cashTypes.length);
        return this.cashTypes[index];
    }
    protected randomCount(): number {
        return Math.floor(Math.random() * 30);
    }
    protected randomPrice(): number {
        return Math.floor(Math.random() * 100);
    }
}
// 复习之前的简单工厂模式 1.0
/**收费基类 */
abstract class CashBase {
    public abstract acceptCash(money: number): number;
}
/**正常收费方式 */
class NormalCash extends CashBase {
    public acceptCash(money: number): number {
        return money;
    }
}
/**打折收费方式 */
class RebateCash extends CashBase {
    private rebate: number = 1;
    constructor(rebate: number) {
        super();
        this.rebate = rebate;
    }
    public acceptCash(money: number): number {
        return Math.floor(money * this.rebate * 100) / 100;
    }
}
/**返利的收费方式 */
class ReturnCash extends CashBase {
    private returnCondition: number = 0;
    private returnCash: number = 0;
    constructor(returnCondition: number, returnCash: number) {
        super();
        this.returnCondition = returnCondition;
        this.returnCash = returnCash;
    }
    public acceptCash(money: number): number {
        let cash: number = money;
        if (cash >= this.returnCondition) {
            cash = money - Math.floor(money / this.returnCondition) * this.returnCash;
        }
        cash = Math.floor(cash * 100) / 100;
        return cash;
    }
}
/**收费方式的工厂 */
class CashFactory {
    public static createCashAccepet(type: string): CashBase {
        let cash: CashBase = null;
        switch (type) {
            case "正常收费":
                cash = new NormalCash();
                break;
            case "满300返100":
                cash = new ReturnCash(300, 100);
                break;
            case "打八折":
                cash = new RebateCash(0.8);
                break;
            default:
                break;
        }
        return cash;
    }
}
/**客户端 */
class ConsoleAction_CashSystem extends ConsoleActionBase {
    ClickEvent(evt?: any): void {
        let type: string = this.randomCashType();
        let count: number = this.randomCount();
        let price: number = this.randomPrice();
        let cash: CashBase = CashFactory.createCashAccepet(type);
        let totalPrice: number = cash.acceptCash(price * count);
        this.total += totalPrice;
        let message: string = '顾客购买某种商品' + " 单价：" + price + " 数量：" + count + " 收费类型：" + type + " 合计：" + totalPrice;
        this.messages.push(message);
        console.log(this.messages.toString());
        console.log("当前总金额为：", this.total);
    }
}
writeMode("简单工厂模式");
let con: ConsoleAction_CashSystem = new ConsoleAction_CashSystem();
con.ClickEvent();
con.ClickEvent();
con.ClickEvent();
con.ClickEvent();

// 新的设计模式：策略模式
/**上下文 */
class Context {

    private cash: CashBase;

    constructor(cash: CashBase) {
        this.cash = cash;
    }
    /**上下文接口 */
    public contextInterface(money: number): number {
        return this.cash.acceptCash(money);
    }
}
/**策略模式客户端 */
class RewriteConsoleAction_CashSystem extends ConsoleActionBase {
    ClickEvent(evt?: any): void {
        let count: number = this.randomCount();
        let price: number = this.randomPrice();

        let type: string = this.randomCashType();
        let context: Context = null;
        switch (type) {
            case "正常收费":
                context = new Context(new NormalCash());
                break;
            case "满300返100":
                context = new Context(new ReturnCash(300, 100));
                break;
            case "打八折":
                context = new Context(new RebateCash(0.8));
                break;
            default:
                break;
        }
        let totalPrice: number = context.contextInterface(price * count);
        this.total += totalPrice;
        let message: string = '顾客购买某种商品' + " 单价：" + price + " 数量：" + count + " 收费类型：" + type + " 合计：" + totalPrice;
        this.messages.push(message);
        console.log(this.messages.toString());
        console.log("当前总金额为：", this.total);
    }
}
writeMode("策略模式");
let rewriteCon: RewriteConsoleAction_CashSystem = new RewriteConsoleAction_CashSystem();
rewriteCon.ClickEvent();
rewriteCon.ClickEvent();
rewriteCon.ClickEvent();
rewriteCon.ClickEvent();

// 客户端只负责显示  不负责算法  在客户端些算法是不可取的  简单工厂模式结合策略模式
class RewriteContext {
    private cash: CashBase = null;

    constructor(type: string) {
        let cash: CashBase = null;
        switch (type) {
            case "正常收费":
                cash = new NormalCash();
                break;
            case "满300返100":
                cash = new ReturnCash(300, 100);
                break;
            case "打八折":
                cash = new RebateCash(0.8);
                break;
            default:
                break;
        }
        this.cash = cash;
    }
    /**上下文接口 */
    public contextInterface(money: number): number {
        return this.cash.acceptCash(money);
    }
}
class RerewriteConsoleAction_CashSystem extends ConsoleActionBase {
    ClickEvent(evt?: any): void {
        let count: number = this.randomCount();
        let price: number = this.randomPrice();
        let type: string = this.randomCashType();
        let context: RewriteContext = new RewriteContext(type);
        let totalPrice: number = context.contextInterface(count * price);
        this.total += totalPrice;
        let message: string = '顾客购买某种商品' + " 单价：" + price + " 数量：" + count + " 收费类型：" + type + " 合计：" + totalPrice;
        this.messages.push(message);
        console.log(this.messages.toString());
        console.log("当前总金额为：", this.total);
    }
}
writeMode("简单工厂-策略模式");
let rerewriteCon: RerewriteConsoleAction_CashSystem = new RerewriteConsoleAction_CashSystem();
rerewriteCon.ClickEvent();
rerewriteCon.ClickEvent();
rerewriteCon.ClickEvent();
rerewriteCon.ClickEvent();
