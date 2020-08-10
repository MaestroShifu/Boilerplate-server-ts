import * as winston from 'winston';
import config, { INodeEnv } from '../config';

const devTransport = new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.printf((info) => {
            return `\u001B[34m[${info.timestamp}]\u001b[39m ${info.level}: ${info.message}`;
        }),
    ),
});

const prodTransport = new winston.transports.Console({
    format: winston.format.combine(
        winston.format.simple(),
        winston.format.printf((info) => {
            return `\u001b[39m ${info.level}: ${info.message}`;
        }),
    ),
});

const transports = config.NODE_ENV === INodeEnv.dev ? [devTransport] : [prodTransport];

export const logger = winston.createLogger({
    exitOnError: false,
    transports,
});

// Example logger function
// logger.info(`Message info`);
// logger.warn(`Message warn`);
// logger.error(`Message error`);