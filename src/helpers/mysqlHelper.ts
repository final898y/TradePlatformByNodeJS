import mysql,{RowDataPacket} from "mysql2/promise";
import env from "../env";

function BuildMysqlStatementSelect(tableName:string): string;
function BuildMysqlStatementSelect(tableName:string, filterField?:string[]): string;

function BuildMysqlStatementSelect(tableName:string, filterField?:string[]): string {
    const baseStatement = `SELECT * FROM ${tableName}`;
    if(filterField===undefined)
    {
        return baseStatement;
    }
    if(filterField.length=1)
    {
        return baseStatement+" WHERE "+ filterField[0]+" = ?";
    }
    let filterStatement = filterField.join(" = ? & ");
    filterStatement.slice(0, -1);//刪掉最後的 & 
    return baseStatement+" WHERE "+filterStatement;
};

const pool = mysql.createPool({
    host: env.MYSQLHOST_TEST,
    user: env.MYSQLUID,
    password: env.MYSQLPASSWORD,
    port: env.MYSQLPORT_TEST,
    database: "TradePlatform"
});

async function SelectQuery(tableName:string, filterField?:string[],filterValue?:any[]): Promise<object[]> {
    try {
        const sqlStatement = BuildMysqlStatementSelect(tableName, filterField);
        const [results, fields] = await pool.query<RowDataPacket[]>(sqlStatement,filterValue);
        return results;
    } catch (error) {
      throw error;
    }
}

export{
    SelectQuery
}

