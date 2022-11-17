import {
  ADDITEM,
  APICALL,
  CANCEL,
  CHANGEPATH,
  DELETEITEM,
  EDITITEM,
  FILTERDATA,
  GOTOFORM,
  UPDATE,
} from "./type";

const int = {
  isEdit: false,
  changepath: false,
  filterData: [],
  edit: {},
  data: [],
  apidata: [],
  formStatus:false,

};
export const reducer = (state = int, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDITEM:
      console.log(payload, "payload");
      return {
        ...state,
        apidata: [...state.apidata, payload],
        
        formStatus: false
      };
    case EDITITEM:
      return {
        ...state,
        edit: payload.editdata,
        isEdit:payload.isEdit
      };
    case CANCEL:
      return {
        ...state,
        isEdit: false,
        formStatus: false,
      };
    case GOTOFORM:
      return {
        ...state,
        formStatus: true,
      };
    case UPDATE:
      return {
        ...state,
        data: state.data.map((el) =>
          el.recid === payload.recid ? payload : el
        ),
        isEdit: false,
      };
    case APICALL:
      return {
        ...state,
        apidata: payload.apidata,
      
        
       
      };
    case DELETEITEM:
      const deletdata = state.apidata.filter((el) => el.capsule_serial !== payload);

      console.log(deletdata);
      return {
        ...state,
        apidata: deletdata,
      };
    case FILTERDATA:
    
console.log(payload,"payload")
      
      return {
        
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};