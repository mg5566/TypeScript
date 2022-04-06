"use strict";
class Department {
    // 약식 초기화
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
class AccountingDepartment extends Department {
    // constructor(private lastReports: string[]) {
    constructor() {
        super("a1", "Accounting");
        this.lastReport = "";
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please pass in valid value");
        }
        this.lastReport = value;
    }
    describe() {
        console.log("Department: ", this.name);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment();
        return this.instance;
    }
}
// const accounting = new AccountingDepartment();
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployee("Kang");
accounting.addEmployee("Kim");
accounting.addEmployee("Cho");
accounting.addEmployee("Lee");
accounting.printEmployeeInfomation();
accounting.mostRecentReport = "1";
console.log("accounting", accounting.mostRecentReport);
accounting2.describe();
console.log(accounting, accounting2);
// inheritance
class ITDepartment extends Department {
    constructor(id, name, admins) {
        super(id, name);
        this.admins = admins;
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    addEmployee(employee) {
        if (this.admins.includes(employee)) {
            return;
        }
        this.employees.push(employee);
    }
    describe() {
        console.log("Department: ", this.name);
    }
}
const it = new ITDepartment("i1", "IT development", ["Kang", "Mike"]);
it.describe();
it.addEmployee("Mike");
it.addEmployee("Cho");
it.addEmployee("Lee");
console.log(it);
