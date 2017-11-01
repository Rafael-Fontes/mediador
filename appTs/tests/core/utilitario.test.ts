import { assert } from 'chai';
import { Utilitario } from '../../core/utilitario';




describe('Testes da classe appTs/core/utilitario.test.ts', () => {
    it('Metodo decParaHex()', () => {
        assert.equal(Utilitario.decParaHex(1), '01');
    });
});