const { default: rootReducer } = require("./reducers");
const {
  REGION_FILTER,
  REQUEST_REPORTS,
  RECEIVE_REPORTS,
} = require("./actions");
const { mockReport } = require("./fixtures/mockReport");

const initialState = {
  reports: { isFetching: false, items: [] },
  filter: "",
};

describe("root reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REGION_FILTER", () => {
    expect(
      rootReducer(initialState, {
        type: REGION_FILTER,
        filter: "test",
      })
    ).toEqual({ ...initialState, filter: "test" });
  });

  it("should handle REQUEST_REPORTS", () => {
    expect(
      rootReducer(initialState, {
        type: REQUEST_REPORTS,
      })
    ).toEqual({
      ...initialState,
      reports: { ...initialState.reports, isFetching: true },
    });
  });

  it("should handle RECEIVE_REPORTS", () => {
    expect(
      rootReducer(initialState, {
        type: RECEIVE_REPORTS,
        reports: [mockReport],
      })
    ).toEqual({
      ...initialState,
      reports: { ...initialState.reports, items: [mockReport] },
    });
  });
});
