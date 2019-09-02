class SchoolGirl {
    private name: string;
    public get Name() {
        return this.name;
    }
    public set Name(name: string) {
        this.name = name;
    }
}
interface GiveGift {
    giveDolls(): void;
    giveFlowers(): void;
    giveChocolate(): void;
}
class Pursuit implements GiveGift {
    public MM: SchoolGirl;
    constructor(mm: SchoolGirl) {
        this.MM = mm;
    }
    public giveDolls(): void {
        console.log("送给MM %s 洋娃娃", this.MM.Name);
    }
    public giveFlowers(): void {
        console.log("送给MM %s 鲜花", this.MM.Name);
    }
    public giveChocolate(): void {
        console.log("送给MM %s 巧克力", this.MM.Name);
    }
}
class Agentor implements GiveGift {
    public gg: Pursuit;
    constructor(mm: SchoolGirl) {
        this.gg = new Pursuit(mm);
    }
    public giveDolls(): void {
        this.gg.giveDolls();
    }
    public giveFlowers(): void {
        this.gg.giveFlowers();
    }
    public giveChocolate(): void {
        this.gg.giveChocolate();
    }
}
class ConsoleAction_AgentSystem {
    constructor() {
        this.init();
    }
    private init(): void {
        let mm: SchoolGirl = new SchoolGirl();
        mm.Name = "meili";
        let agentor: Agentor = new Agentor(mm);
        agentor.giveDolls();
        agentor.giveFlowers();
        agentor.giveChocolate();
        console.log("成功追到手");
    }
}
new ConsoleAction_AgentSystem();