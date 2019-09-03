abstract class ICloneable {
    abstract clone(): ICloneable;

    abstract setPersonalInfo(name: string, sex: string): void;

    abstract setWorkExperience(time: string, company: string): void;

    abstract display(): void;
}
class Resume extends ICloneable {
    private name: string;
    private sex: string;
    private age: string;
    private time: string;
    private company: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
    public clone(): ICloneable {
        let target = new Resume(this.name);
        target.name = this.name;
        target.sex = this.sex;
        target.age = this.age;
        target.time = this.time;
        target.company = this.company;
        return target;
    }
    public setPersonalInfo(age: string, sex: string): void {
        this.age = age;
        this.sex = sex;
    }
    public setWorkExperience(time: string, company: string): void {
        this.time = time;
        this.company = company;
    }
    public display(): void {
        console.log("%s  %s  %s", this.name, this.sex, this.age);
        console.log("工作经历  %s  %s", this.time, this.company);
    }
}
class ConsoleAction_Prototype {
    constructor() {
        this.init();
    }
    private init(): void {
        let moban: Resume = new Resume("by yang");
        moban.setPersonalInfo("18", "男");
        moban.setWorkExperience("17~18", "地球科技");
        moban.display();
        let copy = moban.clone();
        copy.display();
    }
}
new ConsoleAction_Prototype();
