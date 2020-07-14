using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace labrery.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/author")]
    public class AuthorController : ApiController
    {
        [Route("GetAuthor"), HttpGet]
        public IHttpActionResult GetAuthor()
        {
            return Ok(BL.autherBL.GetAuthor());
        }


        [Route("AddAuthor"), HttpPost]
        public IHttpActionResult AddAuthor(AuthorDTO author)
        {
            return Ok(BL.autherBL.addAuther(author));
        }

    }
}
