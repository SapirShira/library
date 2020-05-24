using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;



namespace labrery.Controllers
{
    [RoutePrefix("api/books")]
    public class DefaultController : ApiController
    {
        public string constring = "Data Source=LAPTOP-0CD92FAF\\SQLEXPRESS;Initial Catalog=library;Integrated Security=True";
        public void Try1()
        {
            int code = 1;
            string name = "ספרות";
            SqlConnection con = new SqlConnection(constring);
            con.Open();
            if (con.State == System.Data.ConnectionState.Open)
            {
                string q = "insert into Crowd values('"+code+"','"+name+"') ";
                SqlCommand cmb = new SqlCommand(q, con);
                cmb.ExecuteNonQuery();

            }
        }
       
        // GET: api/Default
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Default/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Default
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Default/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Default/5
        public void Delete(int id)
        {
        }
    }
}
