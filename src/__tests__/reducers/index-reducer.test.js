import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import rootReducer from '../../reducers/index';
import ticketListReducer from '../../reducers/ticket-list-reducer';

describe("rootReducer", () => {

    let store = createStore(rootReducer);
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTicketList: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  test('Check that ADD_TICKET action works for both ticketListReducer and root reducer', () => {
    const action = {
      type: 'ADD_TICKET',
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTicketList).toEqual(ticketListReducer({}, action));
  });
  
  test('Check that TOGGLE_FORM action works for both formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(false, action));
  });
}); 
