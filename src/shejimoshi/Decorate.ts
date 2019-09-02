import { basename } from "path";

abstract class ClothesBase {
    abstract show(): void;
}
class Tshirts extends ClothesBase {
    show(): void {
        console.log("大T恤");
    }
}
class BigTrouse extends ClothesBase {
    show(): void {
        console.log("大裤衩");
    }
}
class BrokenSneakers extends ClothesBase {
    show(): void {
        console.log("破球鞋");
    }
}
class Suit extends ClothesBase {
    show(): void {
        console.log("西服");
    }
}
class Necktie extends ClothesBase {
    show(): void {
        console.log("领带");
    }
}
class LeatherShoes extends ClothesBase {
    show(): void {
        console.log("皮鞋");
    }
}
class ConsoleAction_Decorate {
    constructor() {
        this.int();
    }
    private int(): void {
        console.log("\n第一种装扮");
        let ts_1: ClothesBase = new Tshirts();
        let bt_1: ClothesBase = new BigTrouse();
        let bs_1: ClothesBase = new BrokenSneakers();
        ts_1.show();
        bt_1.show();
        bs_1.show();
        console.log("\n第二种装扮");
        let st_2: ClothesBase = new Suit();
        let nt_2: ClothesBase = new Necktie();
        let ls_2: ClothesBase = new LeatherShoes();
        st_2.show();
        nt_2.show();
        ls_2.show();
    }
}
// new ConsoleAction_Decorate();
// 尝试使用策略模式  (只是试着使用  并不适合本场景)
class Context_Decorate {
    private clothes: ClothesBase;
    constructor(clothes: ClothesBase) {
        this.clothes = clothes;
    }
    public contextInterface(): void {
        this.clothes.show();
    }
}
class RewriteConsoleAction_Decorate {
    constructor() {
        this.init();
    }
    private init(): void {
        console.log("\n第一种装扮");
        new Context_Decorate(new Tshirts()).contextInterface();
        new Context_Decorate(new BigTrouse()).contextInterface();
        new Context_Decorate(new BrokenSneakers()).contextInterface();
        console.log("\n第二种装扮");
        new Context_Decorate(new Suit()).contextInterface();
        new Context_Decorate(new Necktie()).contextInterface();
        new Context_Decorate(new LeatherShoes()).contextInterface();
    }
}
// new RewriteConsoleAction_Decorate();

// 装饰模式 Decorator
class Person {
    private name: string;
    
    public constructor();
    public constructor(name: string);

    public constructor(name?: string) {
        this.name = name;
    }
    public show(): void {
        console.log("装扮的%s", this.name);
    }
}
class Finery extends Person {
    protected component: Person;
    // 打扮
    public decorate(component: Person): void {
        this.component = component;
    }
    public show(): void {
        if (this.component)
            this.component.show();
    }
}
class ComponentTshirts extends Finery {
    public show(): void {
        console.log("大T恤");
        super.show();
    }
}
class ComponentBigTrouse extends Finery {
    show(): void {
        console.log("大裤衩");
        super.show();
    }
}
class ComponentBrokenSneakers extends Finery {
    show(): void {
        console.log("破球鞋");
        super.show();
    }
}
class ComponentSuit extends Finery {
    show(): void {
        console.log("西服");
        super.show();
    }
}
class ComponentNecktie extends Finery {
    show(): void {
        console.log("领带");
        super.show();
    }
}
class ComponentLeatherShoes extends Finery {
    show(): void {
        console.log("皮鞋");
        super.show();
    }
}
class RerewriteConsoleAction_Decorate {
    constructor() {
        this.init();
    }

    init(): void {
        let person: Person = new Person("By Yang");
        console.log("\n 第一种装扮");
        let pgx: ComponentBrokenSneakers = new ComponentBrokenSneakers();
        let kk: ComponentBigTrouse = new ComponentBigTrouse();
        let dtx: ComponentTshirts = new ComponentTshirts();
        pgx.decorate(person);
        kk.decorate(pgx);
        dtx.decorate(kk);
        dtx.show();

        console.log("\n 第二种装扮");
        let px: ComponentLeatherShoes = new ComponentLeatherShoes();
        let ld: ComponentNecktie = new ComponentNecktie();
        let xz: ComponentSuit = new ComponentSuit();
        px.decorate(person);
        ld.decorate(px);
        xz.decorate(ld);
        xz.show();
    }
}
new RerewriteConsoleAction_Decorate();