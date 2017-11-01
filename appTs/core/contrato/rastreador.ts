/**
 * Criado     : 01/11/2017
 * Modificado : 01/11/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 *               Toda classe que representar um rastreador deve implementar essa interface
 */

export interface Rastreador
{
    /**
     * Recebe uma mensagem e quem o implementar, decidi o que fazer com essa mensagem.
     * @param mensagem
     */
    processarMensagem(mensagem): void;
}