var config = require("./dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}

async function getallmember() {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().query("SELECT *  FROM Tbl_member");
    return res.recordsets;
  } catch (error) {
    console.log(" mathus-error :" + error);
  }
}

 
async function getid(UserID) {
  try {
    let pool = await sql.connect(config);
    let res = await pool
      .request()
      .input("UserID", sql.Int, UserID)  // รับค่า UserID และระบุประเภทของข้อมูลเป็น Integer (sql.Int)
      .query("SELECT * FROM Tbl_Member WHERE UserID = @UserID");  // แก้ SQL Query ให้ใช้ Parameter @UserID
    return res.recordsets;
  } catch (error) {
    console.log(" mathus-error :" + error);
  }
}
  

module.exports = {
  getdata: getdata,
  
  getallmember:getallmember,
  getid: getid
};
