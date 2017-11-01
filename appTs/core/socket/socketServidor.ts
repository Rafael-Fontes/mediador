/**
 * Criado     : 30/10/2017
 * Modificado : 01/10/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 */

import * as Net from 'net';
import { Log } from '../log';
import { Rastreador } from '../contrato/rastreador';


export class SocketServidor
{

    private _host: string;
    private _porta: number;
    private _rastreador: Rastreador;
    private _servidor: Net.Server;



    /**
     * @param {string} paramHost
     * @param {int} paramPorta
     * @param {Rastreador} paramRastreador
     */
    constructor(paramHost:string, paramPorta: number, paramRastreador: Rastreador)
    {
        this._host  = paramHost;
        this._porta = paramPorta;
        this._rastreador = paramRastreador;
    }




    /**
     * @private
     * @return {void}
     */
    private _criandoServidor(): void
    {
        this._servidor = Net.createServer((socket) => {});
    }




    /**
     * @private
     */
    private _recebendoDados(): void
    {
        this._servidor.on('data', (mensagem) => {
            this._rastreador.processarMensagem(mensagem);
        });
    }




    /**
     * @private
     */
    private _erro(): void
    {
        this._servidor.on('error', (erro) => {
            Log.error(erro);
        });
    }




    /**
     *
     */
    public iniciar(): void
    {
        this._criandoServidor();
        this._recebendoDados();
        this._erro();


        let configuracao = {
            port: this._porta,
            host: this._host
        };

        this._servidor.listen(configuracao, () => {
            Log.info(`Servidor iniciado em: ${this._servidor.address}`);
        });
    }
}