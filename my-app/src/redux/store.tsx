// store.ts
import { legacy_createStore as createStore, Action, AnyAction } from "redux";

// 초기 상태
interface AppState {
  selectedOption: string | null; // 송금 방법
  accountAmount: number | null; // 계좌 잔액
  sendAccount: number | null; // 보내는 계좌번호
  receiver: string | null; // 받는 사람
  receiveAccount: string | null; // 받는사람의 은행
  money: number | null; // 보낼 금액
  // sendAccountNum: number | null; // 보내는 계좌번호
}

// 액션 타입 정의
const SET_OPTION = "SET_OPTION";
const SET_ACCOUNT_AMOUNT = "SET_ACCOUNT_AMOUNT";
const SET_SEND_ACCOUNT = "SET_SENDACCOUNT";
const SET_RECEIVER = "SET_RECEIVER";
const SET_RECEIVE_ACCOUNT = "SET_RECEIVE_ACCOUNT";
const SET_MONEY = "SET_MONEY";

// 액션 생성자 함수
export const setOption = (option: string | null): AnyAction => ({
  type: SET_OPTION,
  payload: option,
});

export const setAccountAmount = (amount: number | null): AnyAction => ({
  type: SET_ACCOUNT_AMOUNT,
  payload: amount,
});

export const setSendAccount = (sendAccount: number | null): AnyAction => ({
  // 추가된 부분
  type: SET_SEND_ACCOUNT,
  payload: sendAccount,
});

export const setReceiver = (receiver: string | null): AnyAction => ({
  type: SET_RECEIVER,
  payload: receiver,
});

export const setReceiveAccount = (receiveAccount: string | null): AnyAction => ({
  type: SET_RECEIVE_ACCOUNT,
  payload: receiveAccount,
});

export const setMoney = (money: number | null): AnyAction => ({
  type: SET_MONEY,
  payload: money,
});

// 리듀서 함수
const reducer = (
  state: AppState = {
    selectedOption: null,
    accountAmount: null,
    sendAccount: null,
    receiver: null,
    receiveAccount: null,
    money: null,
  },
  action: AnyAction
): AppState => {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    case SET_ACCOUNT_AMOUNT:
      return {
        ...state,
        accountAmount: action.payload,
      };
    case SET_SEND_ACCOUNT: // 추가된 부분
      return {
        ...state,
        sendAccount: action.payload,
      };
    case SET_RECEIVER:
      return {
        ...state,
        receiver: action.payload,
      };
    case SET_RECEIVE_ACCOUNT:
      return {
        ...state,
        receiveAccount: action.payload,
      };
    case SET_MONEY:
      return {
        ...state,
        money: action.payload,
      };
    default:
      return state;
  }
};

// Redux 스토어 생성
const store = createStore(reducer);

export default store;
