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
    [RoutePrefix("api/worker")]
    public class WorkerController : ApiController
    {
        [Route("GetWorkers"), HttpGet]
        public IHttpActionResult GetWorkers()
        {
            return Ok(BL.workerBL.GetWorkers());
        }

        [Route("GetWorkerById/{id}"), HttpGet]
        public IHttpActionResult GetWorkerById([FromUri] int id)
        {
            return Ok(BL.workerBL.GetWorkerById(id));
        }


        [Route("AddWorker"), HttpPost]
        public IHttpActionResult AddWorker(WorkerDTO sub)
        {
            return Ok(BL.workerBL.addWorker(sub));
        }

        [Route("UpdateWorker"), HttpPost]
        public IHttpActionResult UpdateWorker(WorkerDTO sub)
        {
            return Ok(BL.workerBL.updateWorker(sub));
        }

        [Route("DeleteWorker/{id}"), HttpDelete]
        public IHttpActionResult DeleteWorker(int id)
        {
            return Ok(BL.workerBL.deleteWorker(id));
        }
    }
}
