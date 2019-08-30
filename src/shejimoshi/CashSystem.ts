// 策略模式

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
class ConsoleAction {

    total: number = 0;
    cashTypes: string[] = ["正常收费", "满300返100", "打八折"];
    messages: string[] = [];

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

    private randomCashType(): string {
        let index: number = Math.floor(Math.random() * this.cashTypes.length);
        return this.cashTypes[index];
    }
    private randomCount(): number {
        return Math.floor(Math.random() * 30);
    }
    private randomPrice(): number {
        return Math.floor(Math.random() * 100);
    }
}

let con: ConsoleAction = new ConsoleAction();
con.ClickEvent();
con.ClickEvent();
con.ClickEvent();
con.ClickEvent();

