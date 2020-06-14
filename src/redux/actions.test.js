import * as actions from "./actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { mockReport } from "./fixtures/mockReport";

describe("actions", () => {
  it("should create an action to change region filter", () => {
    const filter = "респ";
    const expectedAction = {
      type: actions.REGION_FILTER,
      filter,
    };
    expect(actions.setFilter(filter)).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates RECEIVE_REPORTS when fetching reports has been done", () => {
    fetchMock.getOnce(
      "/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json",
      {
        body: [mockReport],
        headers: { "content-type": "application/json" },
      }
    );

    const expectedActions = [
      { type: actions.REQUEST_REPORTS },
      { type: actions.RECEIVE_REPORTS, reports: [mockReport] },
    ];
    const store = mockStore({
      reports: {
        isFetching: false,
        items: [],
      },
    });

    return store.dispatch(actions.fetchReportsIfNeeded()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
