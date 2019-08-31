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

