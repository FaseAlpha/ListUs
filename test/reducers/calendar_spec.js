import { expect } from 'chai';
import { displayCalendar } from '../../src/actions';
import calendarReducer from '../../src/reducers/calendar';

describe('TEST', () => {

  it('DISPLAY_CALENDAR', () => {

    const initialState = { display: false };
    const nextState = calendarReducer(initialState, displayCalendar(true));

    expect(nextState).to.eql({display:true});
  });
});
