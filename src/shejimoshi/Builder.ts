// 建造者模式

/**绘制一个人的抽象类 */
abstract class PersonBuilder {
    constructor() { }
    /**绘制头部 */
    public abstract buildHead(): void;
    /**绘制身体 */
    public abstract buildBody(): void;
    /**绘制手 */
    public abstract buildArm(): void;
    /**绘制腿 */
    public abstract buildLeg(): void;
}
class ThinPersonBuilder extends PersonBuilder {
    constructor() {
        super();
        console.log("画一个瘦子");
    }
    public buildHead(): void {
        console.log("绘制一个小脑袋");
    }
    public buildBody(): void {
        console.log("绘制一个苗条的身体");
    }
    public buildArm(): void {
        console.log("绘制纤细修长的手");
    }
    public buildLeg(): void {
        console.log("绘制大长腿");
    }
}
class FatPersonBuilder extends PersonBuilder {
    constructor() {
        super();
        console.log("画一个胖子");
    }
    public buildHead(): void {
        console.log("绘制一个圆圆的脑袋");
    }
    public buildBody(): void {
        console.log("绘制一个丰润的身体");
    }
    public buildArm(): void {
        console.log("绘制短粗的手");
    }
    public buildLeg(): void {
        console.log("绘制大象腿");
    }
}
class PersonDirector {
    private builder: PersonBuilder;
    constructor(builder: PersonBuilder) {
        this.builder = builder;
    }
    public createPerson(): void {
        this.builder.buildHead();
        this.builder.buildBody();
        this.builder.buildArm();
        this.builder.buildLeg();
    }
}
class ConsoleAction_Builder {
    constructor() { this.init(); }
    private init() {
        let director1: PersonDirector = new PersonDirector(new ThinPersonBuilder());
        director1.createPerson();

        let director2: PersonDirector = new PersonDirector(new FatPersonBuilder());
        director2.createPerson();
    }
}
new ConsoleAction_Builder();