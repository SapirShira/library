using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace labrery.Controllers
{
    [EnableCors("*","*","*")]
    [RoutePrefix("api/book")]
    public class BookController : ApiController
    {
        [Route("GetBooks") , HttpGet]
        public IHttpActionResult GetBooks()
        {
            return Ok(BL.bookBL.GetBooks());
        }
    }
}
