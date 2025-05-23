export const initialState = {
  name: "",
  year: "",
  warning: "",
};

// 다른 컴포넌트 또는 js에서 사용하게 하기 위해 내보내기
export function userReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload.trim().toLowerCase(),
      };
    case "SET_YEAR": {
      const age = new Date().getFullYear() - action.payload;
      if (age < 18) {
        return {
          ...state,
          warning: "최소 18세 이상이어야 합니다.",
        };
      }
      return {
        ...state,
        year: action.payload,
        warning: "",
      };
    }
    default:
      throw new Error("action type 확인");
  }
}
