abstract class TestPaper {
    public firstQuestion(): void {
        console.log("杨过得到，后来给了郭靖，练成倚天剑、屠龙刀的玄铁可能是（） \n a.球磨铸铁  b.马口铁  c.高速合金钢  d.碳素纤维");
        console.log("答案为：" + this.firstAnswer());
    }
    public secondQuestion(): void {
        console.log("杨过是帅哥吗？（） \n a.是  b.不是");
        console.log("答案为：" + this.secondAnswer());
    }
    public thirdQuestion(): void {
        console.log("小龙女是美女吗？ （） \n a.是  b.不是");
        console.log("答案为：" + this.thirdAnswer());
    }
    abstract firstAnswer(): string;
    abstract secondAnswer(): string;
    abstract thirdAnswer(): string;
}
class FristStudent extends TestPaper {
    constructor() { super(); }
    public firstAnswer(): string {
        return "b";
    }
    public secondAnswer(): string {
        return "a";
    }
    public thirdAnswer(): string {
        return "a";
    }
}
class SecondStudent extends TestPaper {
    constructor() { super(); }
    public firstAnswer(): string {
        return "a";
    }
    public secondAnswer(): string {
        return "b";
    }
    public thirdAnswer(): string {
        return "a";
    }
}
class ConsoleAction_TestPaper {
    constructor() {
        this.init();
    }
    private init(): void {
        console.log("第一个学生的试卷");
        let first: FristStudent = new FristStudent();
        first.firstQuestion();
        first.secondQuestion();
        first.thirdQuestion();
        console.log("第二个学生的试卷");
        let second: SecondStudent = new SecondStudent();
        second.firstQuestion();
        second.secondQuestion();
        second.thirdQuestion();
    }
}
new ConsoleAction_TestPaper();
