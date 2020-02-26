class Computer {
    //test 1
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }
    //test 2, 3, 4, 5
    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error(`There is not enough space on the hard drive`)
        }

        let program = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;
        return program;
    }
    //test 6, 7, 8
    uninstallAProgram(name) {
        const indexProgram = this.installedPrograms.findIndex(program => program.name === name);

        if (indexProgram === -1)
            throw new Error(`Control panel is not responding`);

        this.hddMemory += this.installedPrograms[indexProgram].requiredSpace;

        this.installedPrograms.splice(indexProgram, 1)

        return this.installedPrograms;
    }

    openAProgram(name) {
        const indexProgram = this.installedPrograms.findIndex(program => program.name === name);

        if (indexProgram === -1)
            throw new Error(`The ${name} is not recognized`);

        const progamIsOpend = this.taskManager.find(program => program.name === name);
        //test 9
        if (progamIsOpend)
            throw new Error(`The ${name} is already open`);
        //test 10, 11, 12, 13
        const ramUsage = (this.installedPrograms[indexProgram].requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = ((this.installedPrograms[indexProgram].requiredSpace / this.cpuGHz) / 500) * 1.5;

        const totalRamUsed = this.taskManager.reduce((a, b) => a += b.ramUsage, 0);
        const totalCpuUsed = this.taskManager.reduce((a, b) => a += b.cpuUsage, 0);

        if (totalRamUsed + ramUsage >= 100)
            throw new Error(`"${name} caused out of memory exception`);

        if (totalCpuUsed + cpuUsage >= 100)
            throw new Error(`"${name} caused out of cpu exception`);

        const program = {
            name,
            ramUsage,
            cpuUsage
        }

        this.taskManager.push(program);

        return program;
    }

    taskManagerView() {
        let openedPrograms = Object.values(this.taskManager);

        if (openedPrograms.length === 0) {

            return `All running smooth so far` //test 14
        } else { //test 15

            return openedPrograms.map(prg => `Name - ${prg.name} | Usage - CPU: ${prg.cpuUsage.toFixed(0)}%, RAM: ${prg.ramUsage.toFixed(0)}%`).join('\n')
        }
    }
}

// let computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram('Word', 7300);
// computer.installAProgram('Excel', 10240);
// computer.installAProgram('PowerPoint', 12288);
// computer.uninstallAProgram('Word');
// computer.installAProgram('Solitare', 1500);

// computer.openAProgram('Excel');
// computer.openAProgram('Solitare');

// console.log(computer.installedPrograms);
// console.log(('-').repeat(50)) // Separator
// console.log(computer.taskManager);

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());
