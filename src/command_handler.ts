export type CommandHandler = (cmdName: string, ...args: string[]) => void;

export type CommandsRegistry = Record<string,CommandHandler>

export function registerCommand(registry: CommandsRegistry, cmdName: string, handler: CommandHandler): void {
    registry[cmdName] = handler;
}

export function runCommand(registry: CommandsRegistry, cmdName: string, ...args: string[]): void {
    if (cmdName in registry) {
        const handler = registry[cmdName];
        handler(cmdName,...args);
    }
    else {
        console.log(`${cmdName} is not a registered Command Handler`);
        process.exit(1);
    }

}
