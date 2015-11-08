import { expect } from 'chai';
import { displayAside } from '../../src/actions';
import asideReducer from '../../src/reducers/aside.js';


describe('TEST DISPLAY_ASIDE', () => {

  it('DISPLAY ASIDE', () => {
    const initialState = { display: true };
    const nextState = asideReducer(initialState, displayAside(false));
    expect(nextState).to.eql({display: false});
  });
});
