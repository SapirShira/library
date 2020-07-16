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
    [RoutePrefix("api/subscriptionType")]
    public class subscriptionTypeController : ApiController
    {

        [Route("GetSubscriptionTypes"), HttpGet]
        public IHttpActionResult GetSubscriptionTypes()
        {
            return Ok(BL.subscriptionTypeBL.GetSubscriptionTypes());
        }

        [Route("AddSubscriptionType"), HttpPost]
        public IHttpActionResult AddSubscriptionType(SubscriptionTypeDTO sub)
        {
            return Ok(BL.subscriptionTypeBL.addSubscriptionType(sub));
        }

        [Route("UpdateSubscriptionType"), HttpPost]
        public IHttpActionResult UpdateSubscriptionType(SubscriptionTypeDTO sub)
        {
            return Ok(BL.subscriptionTypeBL.updateSubscriptionType(sub));
        }

    }
}
