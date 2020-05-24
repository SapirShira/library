using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class crowdBL
    {
        public static bool addCrowd(string newName)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Crowds.Add(new Crowd
                {
                    nameCrowd = newName
                });
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
