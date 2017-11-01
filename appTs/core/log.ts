/**
 * Criado     : 28/07/2016
 * Modificado : 01/11/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 */

import * as Winston from 'winston';


export class Log
{
    /**
     * @param {string} paramName
     * @param {string} paramFilename
     * @param {string} paramLevel
     *
     * @return {Winston}
     * @private
     */
    public static _configuracao(paramName: string, paramFilename: string, paramLevel: string): Winston
    {
        let retornar = Winston.createLogger({
            transports: [
                new Winston.transports.Console({
                    colorize: true,
                }),

                new Winston.transports.File({
                    name    : paramName,
                    filename: paramFilename,
                    level   : paramLevel,
                    json    : true,
                    maxsize : 104857600, //100MB,
                    maxFiles: 1
                })
            ],

            exceptionHandlers : [
                new Winston.transports.File({
                    filename: '../AppTs/storage/logs/exceptions.log',
                    handleExceptions: true
                })
            ]
        });

        return retornar;
    }




    /**
     * @param dados
     */
    public static info(dados: any): void
    {
        Log._configuracao(
            'info-file',
            '../AppTs/storage/logs/loggers-info.log',
            'info'
        ).info(dados);
    }




    /**
     * @param dados
     */
    public static warn(dados: any): void
    {
        Log._configuracao(
            'warn-file',
            '../AppTs/storage/logs/loggers-warn.log',
            'warn'
        ).warn(dados);
    }




    /**
     * @param dados
     */
    public static error(dados: any): void
    {
        Log._configuracao(
            'error-file',
            '../AppTs/storage/logs/loggers-error.log',
            'error'
        ).warn(dados);
    }
}