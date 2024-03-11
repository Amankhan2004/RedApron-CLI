//importing readline 
const readline = require('readline');

//creating a new readline interface for input and output streams
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



class Screen {
    constructor() {
        this.label = 'MainMenu';
        //array of objects that dylan was talking about I think
        this.options = [
            { label: 'CRUD', run: () => console.log('Crud option has been selected') },
            { label: 'HL', run: () => console.log('HL option has been selected') }
        ];
    }

    //iterating over options to display each one 
    displayOptions() {
        console.clear();
        this.options.forEach((option, index) => {
          console.log(`${index + 1}) ${option.label}`);
        });
        //this is for the quit option
        console.log(`${this.options.length + 1}) Quit`);
      }
    
      promptUser() {
        rl.question('select an option: ', (input) => {
          const option = parseInt(input, 10);
          if (option === this.options.length + 1) {
            rl.close();
          } else if (option > 0 && option <= this.options.length) {
            this.options[option - 1].run();
            this.promptUser(); // Re-display menu after action
          } else {
            console.log("Invalid option");
            this.promptUser(); // Re-prompt for valid input
          }
        });
      }
    
      
      run() {
        this.displayOptions();
        this.promptUser();
      }
}

const mainMenu = new Screen();
mainMenu.run();

rl.on('close', () => {
  console.log('Exiting the menu...');
  process.exit(0);
});





