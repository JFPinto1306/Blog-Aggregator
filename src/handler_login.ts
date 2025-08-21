import { CommandHandler } from "./command_handler.js";
import {setUser} from "./config.js";

const LoginHandler: CommandHandler = handlerLogin;

export function handlerLogin(cmdName: string,...args: string[]): void {
    if (args.length != 1) {
        console.log("The login handler expects a single argument, the username");
        process.exit(1);
    }
    const userName = args[0];
    setUser(userName);
    console.log(`User ${userName} has been set.`);

};