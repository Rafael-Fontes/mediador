/**
 * Criado     : 07/05/2016
 * Modificado : 26/07/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  : Cotem metodos utilizados o tempo todo
 */

export class Utilitario
{
    /**
     * Converte um valor decimal para um valor hexadecimal.
     *
     * @param {int} decimal
     * @return string
     */
    static decParaHex(decimal: number):string
    {
        if(decimal)
        {
            let hexadecimal : string;

            hexadecimal = decimal.toString(16).toUpperCase();
            if(hexadecimal.length == 1)
                return 0+hexadecimal;

            return hexadecimal;
        }

        return '';
    }
}