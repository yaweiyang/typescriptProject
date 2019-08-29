class CalculateBase {
    public element_A: number = 0;
    public element_B: number = 0;
    constructor() { }
    public getResult(): number {
        return 0;
    }
}
class Add extends CalculateBase {
    public getResult(): number {
        return this.element_A + this.element_B;
    }
}
class Subtract extends CalculateBase {
    public getResult(): number {
        return this.element_A - this.element_B;
    }
}
class Multiply extends CalculateBase {
    public getResult(): number {
        return this.element_A * this.element_B;
    }
}
class Divide extends CalculateBase {
    public getResult(): number {
        if (this.element_B == 0)
            throw Error("除数不能为零");
        else
            return this.element_A / this.element_B;
    }
}
class CalculatorFactory {
    private static ins: CalculatorFactory;
    public static getInstance(): CalculatorFactory {
        if (!CalculatorFactory.ins)
            CalculatorFactory.ins = new CalculatorFactory();
        return CalculatorFactory.ins;
    }
    public createFactory(type: string): CalculateBase {
        let factory: CalculateBase = new CalculateBase();
        switch (type) {
            case "ADD":
                factory = new Add();
                break;
            case "SUBTRACT":
                factory = new Subtract();
                break;
            case "MULTIPLY":
                factory = new Multiply();
                break;
            case "DIVIDE":
                factory = new Divide();
                break;
            default:
                break;
        }
        return factory;
    }
}

/**负责随机 运算的两个数字和运算方式 */
export default class ConsoleAction {
    constructor() {
        this.initConsoleAction();
    }
    /**随机生成参与运算的两个数字的随机范围 */
    public randomRange: number = 100;
    private calculateTypes: string[] = ["ADD", "SUBTRACT", "MULTIPLY", "DIVIDE"];
    public initConsoleAction() {
        try {
            let element_A: number = this.randomCalculateElement();
            let element_B: number = this.randomCalculateElement();
            let calculateType: string = this.randomCalculateType();
            let factory: CalculateBase = CalculatorFactory.getInstance().createFactory(calculateType);
            factory.element_A = element_A;
            factory.element_B = element_B;
            console.log(factory.element_A, factory.element_B, "进行", calculateType, " 运算", "结果为：", factory.getResult());
        } catch (e) {
            console.log(e);
        }
    }

    private randomCalculateElement(): number {
        return Math.floor(Math.random() * this.randomRange);
    }

    private randomCalculateType(): string {
        return this.calculateTypes[Math.floor(Math.random() * this.calculateTypes.length)];
    }
}

new ConsoleAction();