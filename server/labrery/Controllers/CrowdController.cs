﻿using DTO;
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
    [RoutePrefix("api/crowd")]
    public class CrowdController : ApiController
    {
        [Route("GetCrowd"), HttpGet]
        public IHttpActionResult GetCrowd()
        {
            return Ok(BL.crowdBL.GetCrowds());
        }


        [Route("AddCrowd"), HttpPost]
        public IHttpActionResult AddCrowd(CrowdDTO crowd)
        {
            return Ok(BL.crowdBL.addCrowd(crowd));
        }

        [Route("UpdateCrowd"), HttpPost]
        public IHttpActionResult UpdateCrowd(CrowdDTO crowd)
        {
            return Ok(BL.crowdBL.updateCrowd(crowd));
        }

    }
}
