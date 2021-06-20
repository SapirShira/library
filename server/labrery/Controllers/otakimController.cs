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
    [RoutePrefix("api/copy")]
    public class otakimController : ApiController
    {

        [Route("GetCopies"), HttpGet]
        public IHttpActionResult GetCopies()
        {
            return Ok(BL.otekBL.GetOtakim());
        }

        [Route("GetCopiesByCodeBook/{code}"), HttpGet]
        public IHttpActionResult GetOtakimByCodeBook([FromUri] int code)
        {
            return Ok(BL.otekBL.GetOtakimByCodeBook(code));
        }


        [Route("DeleteCopy/{codeCopy}"), HttpDelete]
        public IHttpActionResult DeleteCopy(int codeCopy)
        {
            return Ok(BL.otekBL.updateOtekStatus(codeCopy,"נמחק"));
        }


        [Route("AddCopiec"), HttpPost]
        public IHttpActionResult AddCopiec(OtekToAddDTO book)
        {
            return Ok(BL.bookBL.addExistsBook(book));
        }

    }
}
