/**
 * Criado     : 01/11/2017
 * Modificado : 01/11/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 */

import { Log } from './log';


export class Autenticar
{
    /**
     * @return {boolean}
     */
    public autenticar()
    {
        try {
            return new Promise((resolve, reject) => {

            });
        }
        catch(erro) {
            Log.error(erro);
        }
    }




    /**
     * Salva informações do rastreador autenticado
     */
    public salvarDados()
    {

    }
}