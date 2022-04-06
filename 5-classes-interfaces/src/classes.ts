abstract class Department {
  protected employees: string[] = [];

  static fiscalYear = 2022;

  // 약식 초기화
  constructor(private readonly id: string, protected readonly name: string) {}

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private lastReport: string = "";

  // constructor(private lastReports: string[]) {
  private constructor() {
    super("a1", "Accounting");
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found.");
  }

  set mostRecentReport(value: string) {
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
  constructor(id: string, name: string, private admins: string[]) {
    super(id, name);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  addEmployee(employee: string) {
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
