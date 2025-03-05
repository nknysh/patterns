interface ITaxPayer {
    income: number;
    tax: number;
    calculateTax(income: number): void;
};

interface ITaxPayerComposite {
    calculateTax(): void;
};

// Individual class with own implementation of calculateTax()
class Employee implements ITaxPayer {
    income: number;
    tax: number;

    constructor(income: number) {
        this.tax = 0;
        this.income = income;
    }

    calculateTax(income: number) {
        this.tax = income * 0.2;
        console.log(`Calculated tax for employee with income ${income}`);
    };
};

// Individual class with own implementation of calculateTax()
class Enterpreneur implements ITaxPayer {
    income: number;
    tax: number;

    constructor(income: number) {
        this.tax = 0;
        this.income = income;
    }

    calculateTax(income: number) {
        this.tax = income * 0.05;
        console.log(`Calculated tax for enterpreneur with income ${income}`);
    };
};

// Composite class
class TaxPayer implements ITaxPayerComposite {
    private taxPayers: ITaxPayer[];

    constructor() {
        this.taxPayers = [];
    }

    add(payer: ITaxPayer) {
        this.taxPayers.push(payer);
    }

    calculateTax() {
        this.taxPayers.forEach(payer => {
            payer.calculateTax(payer.income);
        });
    }
};

const taxPayers = new TaxPayer();

taxPayers.add(new Employee(3000));
taxPayers.add(new Enterpreneur(4000));
taxPayers.add(new Enterpreneur(7000));
taxPayers.calculateTax();

console.log(JSON.stringify(taxPayers));
