// 观察者模式

/**观察者抽象类 */
abstract class Observer {
    protected name: string;
    protected seretary: Secretary;
    constructor(name: string, sub: Secretary) {
        this.name = name;
        this.seretary = sub;
    }
    public abstract update(): void;
}
/**看股票的同事类 */
class StockObserver extends Observer {
    constructor(name: string, sub: Secretary) {
        super(name, sub);
    }
    public update(): void {
        console.log(this.seretary.Action, this.name, "关闭股票行情， 继续工作！");
    }
}
/**看NBA比赛的同事类 */
class NBAObserver extends Observer {
    constructor(name: string, sub: Secretary) {
        super(name, sub);
    }
    public update(): void {
        console.log(this.seretary.Action, this.name, "关闭NBA比赛， 继续工作！");
    }
}
/**前台 */
class Secretary {
    private observers: StockObserver[] = [];
    private _action: string;
    public get Action() {
        return this._action;
    }
    public set Action(value: string) {
        this._action = value;
    }
    public attach(observer: StockObserver): void {
        this.observers.push(observer);
    }
    public notify(): void {
        for (let i = 0; i < this.observers.length; ++i) {
            this.observers[i].update();
        }
    }
}

class ConsoleAction_Observer {
    constructor() {
        this.init();
    }
    private init(): void {
        // 公司前台
        let seretary: Secretary = new Secretary();
        // 看股票的同事
        let tongshi1: StockObserver = new StockObserver("小菜", seretary);
        let tongshi2: StockObserver = new StockObserver("大鸟", seretary);

        // 告诉前台老板回来了赶紧通知他们
        seretary.attach(tongshi1);
        seretary.attach(tongshi2);

        // 发现老板回来
        seretary.Action = "老板回来了！";
        // 通知同事们
        seretary.notify();
    }
}
new ConsoleAction_Observer();