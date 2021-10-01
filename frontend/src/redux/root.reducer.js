import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { snackbarReducer } from "./snackbar/snackbar.reducer";
import deficiencySummaryReducer from './deficiency-summary/deficiency-summary.reducer';
import fileReducer from './file/file.reducer';
import finalReportReducer from './final-report/final-report.reducer';
import workOrderReducer from './work-order/work-order.reducer';
import workSheetReducer from './work-sheet/work-sheet.reducer';
import yearPlanReducer from './year-plan/year-plan.reducer';

export default combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  deficiencySummary: deficiencySummaryReducer,
  file: fileReducer,
  finalReport: finalReportReducer,
  workOrder: workOrderReducer,
  workSheet: workSheetReducer,
  yearPlan: yearPlanReducer,
});
