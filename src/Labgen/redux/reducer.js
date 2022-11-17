import {
  ADDITEM,
  APICALL,
  CANCEL,
  CHANGEPATH,
  DELETEITEM,
  EDITITEM,
  FILTERDATA,
  UPDATE,
} from "./type";

const int = {
  isEdit: false,
  changepath: false,
  filterData: [],
  edit: {},
  data: [],
  formStatus:false,

};
export const reducer = (state = int, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDITEM:
      console.log(payload, "payload");
      return {
        ...state,
        data: [...state.data, payload.item],
        isEdit:false,
        formStatus: payload.formStatus
      };
    case EDITITEM:
      return {
        ...state,
        edit: payload.editdata,
        isEdit:payload.isEdit
      };
    case CANCEL:
      return {
        isEdit: false,
        changepath: false,
      };
    case CHANGEPATH:
      return {
        ...state,
        changepath: payload.changepath,
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
        data: payload.apidata,
        filterData:payload.apidata
          
        
       
      };
    case DELETEITEM:
      const deletdata = state.data.filter((el) => el.capsule_serial !== payload);

      console.log(deletdata);
      return {
        ...state,
        data: deletdata,
      };
    case FILTERDATA:
    

      
      return {
        ...state,
        filterdata: payload,
      };

    default:
      return state;
  }
};