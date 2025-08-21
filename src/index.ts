import {setUser,readConfig} from "./config.js";
import {CommandsRegistry, registerCommand, runCommand} from "./command_handler.js";
import { handlerLogin } from "./handler_login.js";
import { argv } from 'node:process';



function main() {
  const registry: CommandsRegistry = {};
  registerCommand(registry,'login',handlerLogin);

  let inputArgs: string[] = process.argv.slice(2)
  console.log(inputArgs);
  
  if (inputArgs.length<1) {
    console.log("Input contained no arguments");
    process.exit(1);
  }

  const cmdName = inputArgs[0];
  const args: string[] = inputArgs.slice(1);

  runCommand(registry,cmdName,...args);
}

main();
