using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class crowdBL
    {
        public static bool addCrowd(CrowdDTO c)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Crowds.Add(Converters.CrowdConverter.ConvertCrowdDTOCToDAL(c));
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }
    }
}
