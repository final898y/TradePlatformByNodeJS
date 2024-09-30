import mysql, { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import env from '../env';

function BuildMysqlStatementSelect(tableName: string): string;
function BuildMysqlStatementSelect(tableName: string, filterField?: string[]): string;

function BuildMysqlStatementSelect(tableName: string, filterField?: string[]): string {
  const baseStatement = `SELECT * FROM ${tableName}`;
  if (filterField === undefined) {
    return baseStatement;
  }
  if (filterField.length === 1) {
    return baseStatement + ' WHERE ' + filterField[0] + ' = ?';
  }
  let filterStatement = filterField.join(' = ? AND ');
  return baseStatement + ' WHERE ' + filterStatement+' = ?';
}

function BuildMysqlStatementInsert(tableName: string, filterField?: string[]): string {
  const baseStatement = `INSERT INTO ${tableName} (`;
  if (filterField === undefined) {
    return baseStatement.slice(0, -1);
  }
  if (filterField.length === 1) {
    return baseStatement + filterField[0] + ') VALUES (?)';
  }
  let filterStatement = filterField.join(', ');
  const questionMarkArray = Array(filterField.length).fill('?');
  const questionMarkString = questionMarkArray.join(', ');
  return baseStatement + filterStatement + ') VALUES (' + questionMarkString + ')';
}

function BuildMysqlStatementUpdate(tableName: string, updateField: string[], filterField: string): string {
  const baseStatement = `UPDATE ${tableName} SET `;
  if (updateField.length === 1) {
    return baseStatement + updateField[0] + '= ? WHERE '+ filterField +'= ?';
  }
  else {
    let updateStatement = updateField.join('= ?, ');
    return baseStatement + updateStatement + '= ? ' + 'WHERE '+ filterField +'= ?';
  }
}

const pool = mysql.createPool({
  host: env.MYSQLHOST_TEST,
  user: env.MYSQLUID,
  password: env.MYSQLPASSWORD,
  port: env.MYSQLPORT_TEST,
  database: 'TradePlatform',
});

async function SelectQuery(
  tableName: string,
  filterField?: string[],
  filterValue?: any[],
): Promise<object[]> {
  try {
    const sqlStatement = BuildMysqlStatementSelect(tableName, filterField);
    const [results, fields] = await pool.query<RowDataPacket[]>(sqlStatement, filterValue);
    return results;
  } catch (error) {
    throw error;
  }
}

async function InsertQuery(
  tableName: string,
  filterField?: string[],
  filterValue?: any[],
): Promise<ResultSetHeader> {
  try {
    const sqlStatement = BuildMysqlStatementInsert(tableName, filterField);
    const [ResultSetHeader, FieldPacket] = await pool.query<ResultSetHeader>(
      sqlStatement,
      filterValue,
    );
    //   ResultSetHeader{
    //     "fieldCount": 0,
    //     "affectedRows": 1,
    //     "insertId": 0,
    //     "info": "",
    //     "serverStatus": 2,
    //     "warningStatus": 0,
    //     "changedRows": 0
    // },
    return ResultSetHeader;
  } catch (error) {
    throw error;
  }
}

async function UpdateQuery(
  tableName: string,
  updateField: string[],
  updateAndFilterValue: any[],
  filterField: string,
): Promise<ResultSetHeader> {
  try {
    const sqlStatement = BuildMysqlStatementUpdate(tableName,updateField,filterField);
    const [ResultSetHeader, FieldPacket] = await pool.query<ResultSetHeader>(
      sqlStatement,
      updateAndFilterValue,
    );
    //   ResultSetHeader{
    //     "fieldCount": 0,
    //     "affectedRows": 1,
    //     "insertId": 0,
    //     "info": "",
    //     "serverStatus": 2,
    //     "warningStatus": 0,
    //     "changedRows": 0
    // },
    return ResultSetHeader;
  } catch (error) {
    throw error;
  }
}

export { SelectQuery, InsertQuery, UpdateQuery };
