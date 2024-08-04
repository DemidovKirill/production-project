import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/Store';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue; }>;

jest.mock('axios');
const mockedAxios: jest.MockedFunctionDeep<AxiosStatic> = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StoreSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.actionCreator(arg);
    return actionCreator(this.dispatch, this.getState, { api: this.api });
  }
}
