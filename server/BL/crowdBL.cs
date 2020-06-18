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

        public static bool updateCrowd(CrowdDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Crowd b = db.Crowds.First(x => x.codeCrowd == a.codeCrowd);
                b.nameCrowd = a.nameCrowd;

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

        public static List<CrowdDTO> GetCrowds()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.CrowdConverter.ConvertCrowdListToDTO(db.Crowds.ToList());

            }
        }

    }
}
