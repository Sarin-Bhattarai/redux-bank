const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

//action creator
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: formattedDate },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
