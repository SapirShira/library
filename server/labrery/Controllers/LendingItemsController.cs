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
    [RoutePrefix("api/lendingItem")]
    public class LendingItemsController : ApiController
    {
        [Route("GetLendingItems"), HttpGet]
        public IHttpActionResult GetLendingItems()
        {
            return Ok(BL.lendingItemsBL.GetLendingItems());
        }


        [Route("AddGetLendingItem"), HttpPost]
        public IHttpActionResult AddGetLendingItem(LendingItemDTO l)
        {
            return Ok(BL.lendingItemsBL.addLendingItems(l));
        }


        [Route("returnD"), HttpPost]
        public IHttpActionResult returnD(int code)
        {
            return Ok(BL.lendingItemsBL.ReturnD(code));
        }
    }
}
