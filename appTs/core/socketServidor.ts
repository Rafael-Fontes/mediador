/**
 * Criado     : 30/10/2017
 * Modificado : 30/10/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 */

import * as Net from 'net';


export class SocketServidor
{

    private _host: string;
    private _porta: number;


    constructor(paramHost:string, paramPorta: number)
    {
        this._host  = paramHost;
        this._porta = paramPorta;
    }
}