function starOutGrid(grid) {
  let columnsWithStars = [];
  let rowsWithStars = [];
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === "*") {
        rowsWithStars.push(i);
        columnsWithStars.push(k);
      }
    }
  }
  for (const rowNum of rowsWithStars) {
    grid[rowNum].fill("*");
  }

  for (const columnNum of columnsWithStars) {
    for (const row of grid) {
      row[columnNum] = "*";
    }
  }

  return grid;
}
