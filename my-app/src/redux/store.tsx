// store.ts
import { legacy_createStore as createStore, Action, AnyAction } from "redux";

// 초기 상태
interface AppState {
  selectedOption: string | null;
}

// 액션 타입 정의
const SET_OPTION = "SET_OPTION";

// 액션 생성자 함수
export const setOption = (option: string | null): AnyAction => ({
  type: SET_OPTION,
  payload: option,
});

// 리듀서 함수
const reducer = (state: AppState = { selectedOption: null }, action: AnyAction): AppState => {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

// Redux 스토어 생성
const store = createStore(reducer);

export default store;
