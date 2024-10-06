class MySqlError extends Error {
  code?: string;
  errno?:number;
  fatal?:boolean;
  sql?:string;
  sqlState?:string;
  sqlMessage?: string;

  
  constructor(
    message: string, 
    code?: string, 
    errno?: number, 
    fatal?: boolean, 
    sql?: string, 
    sqlState?: string, 
    sqlMessage?: string
  ) {
    super(message);
    this.name = "MySqlError";
    this.code = code;
    this.errno = errno;
    this.fatal = fatal;
    this.sql = sql;
    this.sqlState = sqlState;
    this.sqlMessage = sqlMessage;
  }
}

function logSqlError(err: MySqlError) {
  console.error('Query error:', '1. message: ',err.message, '2.code:', err.code, '3.sqlMessage:', err.sqlMessage);
}

export{
  MySqlError,logSqlError
}