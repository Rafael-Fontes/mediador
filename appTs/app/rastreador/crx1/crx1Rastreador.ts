/**
 * Criado     : 01/11/2017
 * Modificado : 01/11/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 */

import { Log } from '../../../core/log';
import {Rastreador} from '../../../core/contrato/rastreador';



export class Crx1Rastreador implements Rastreador
{
    /**
     * @param mensagem
     */
    public processarMensagem(mensagem)
    {
        try {

        }
        catch(erro) {
            Log.error(erro);
        }
    }
}
