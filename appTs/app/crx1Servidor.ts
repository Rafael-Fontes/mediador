/**
 * Criado     : 01/11/2017
 * Modificado : 01/11/2017
 * Autor      : rafaelk-f@hotmail.com
 * Descrição  :
 */



import { SocketServidor } from '../core/socket/socketServidor';
import { Crx1Rastreador } from './rastreador/crx1/crx1Rastreador';



let socketServidor = new SocketServidor('127.0.0.1', 15000, new Crx1Rastreador);
socketServidor.iniciar();