using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class categoriesBL
    {
        public static bool addCategory(string newName)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Categories.Add(new Category
                {
                    nameCategory=newName
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
