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
    [RoutePrefix("api/lending")]
    public class LendingController : ApiController
    {

        [Route("GetLendings"), HttpGet]
        public IHttpActionResult GetLendings()
        {
            return Ok(BL.lendingBL.GetLendings());
        }


        [Route("AddLending"), HttpPost]
        public IHttpActionResult AddLending(LendingDTO Lending)
        {
            return Ok(BL.lendingBL.addLending(Lending));
        }
    }
}
