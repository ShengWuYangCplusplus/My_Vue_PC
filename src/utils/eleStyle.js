function getRowClass({ row, column, rowIndex, columnIndex }) {
  if (rowIndex == 0) {
    return "background:	#2196F3;color:white;font-size:14px;opacity:0.9;padding:6px";
  } else {
    return "";
  }
}

export { getRowClass }

export const getWhiteHead = function ({ row, column, rowIndex, columnIndex }) {
  if (rowIndex == 0) {
    return "background:	#F2F6FC;color:gray;font-size:14px;opacity:0.9;padding:6px";
  } else {
    return "";
  }
}



