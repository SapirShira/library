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
    [RoutePrefix("api/category")]
    public class CategoryController : ApiController
    {
        [Route("GetCategorys"), HttpGet]
        public IHttpActionResult GetCategorys()
        {
            return Ok(BL.categoriesBL.GetCategorys());
        }

        [Route("AddCategory"), HttpPost]
        public IHttpActionResult AddCategory(CategoryDTO category)
        {
            return Ok(BL.categoriesBL.addCategory(category));
        }

    }
}
