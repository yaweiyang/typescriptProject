class LeiFeng {
    public sweep(): void {
        console.log("扫地");
    }
    public wash(): void {
        console.log("洗衣");
    }
    public buyRice(): void {
        console.log("买米");
    }
}
class UnderGraduate extends LeiFeng { }
class Volunteer extends LeiFeng { }
// 简单工厂模式
class SimpleFactory {
    public static createLeiFeng(str: string): LeiFeng {
        let leifeng: LeiFeng = null;
        switch (str) {
            case "大学生":
                leifeng = new UnderGraduate();
                break;
            case "志愿者":
                leifeng = new Volunteer();
                break;
        }
        return leifeng;
    }
}
// 工厂模式
interface IFactory {
    createLeiFeng(): LeiFeng;
}
class UnderGraduateFactory implements IFactory {
    createLeiFeng(): LeiFeng {
        return new UnderGraduate();
    }
}
class VolunteerFactory implements IFactory {
    createLeiFeng(): LeiFeng {
        return new Volunteer();
    }
}
class ConsoleAction_Factory {
    constructor() {
        this.init();
    }
    private init(): void {
        // let leifeng_1: LeiFeng = SimpleFactory.createLeiFeng("大学生");
        // leifeng_1.sweep();
        // leifeng_1.wash();
        // leifeng_1.buyRice();
        // let leifeng_2: LeiFeng = SimpleFactory.createLeiFeng("志愿者");
        // leifeng_2.sweep();
        // leifeng_2.wash();
        // leifeng_2.buyRice();


        
        // let factory: IFactory = new UnderGraduateFactory();
        // let student: UnderGraduate = factory.createLeiFeng();
        // student.sweep();
        // student.wash();
        // student.buyRice();

        // let factory_1: IFactory = new VolunteerFactory();
        // let volunteer: Volunteer = factory_1.createLeiFeng();
        // volunteer.sweep();
        // volunteer.wash();
        // volunteer.buyRice();
    }
}
new ConsoleAction_Factory();