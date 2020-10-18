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
    [RoutePrefix("api/subscriber")]
    public class SubsciberController : ApiController
    {
        [Route("GetSubscribers"), HttpGet]
        public IHttpActionResult GetSubscribers()
        {
            return Ok(BL.subscriberBL.GetSubscibers());
        }


        [Route("AddSubscriber"), HttpPost]
        public IHttpActionResult AddAddSubscriberBook(SubsciberDTO sub)
        {
            return Ok(BL.subscriberBL.addSubscriber(sub));
        }

        [Route("UpdateSubscriber"), HttpPost]
        public IHttpActionResult UpdateSubscriber(SubsciberDTO sub)
        {
            return Ok(BL.subscriberBL.updateSubsciber(sub));
        }

        [Route("DeleteSubscriber"), HttpPost]
        public IHttpActionResult DeleteSubscriber(int id)
        {
            return Ok(BL.subscriberBL.deleteSubsciber(id));
        }
    }
}
