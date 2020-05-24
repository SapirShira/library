using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class autherBL
    {
        public static bool addAuther(string firstN, string lastN, string litersryA)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Aauthors.Add(new Aauthor
                {
                   firstName=firstN,
                   lastName=lastN,
                   LiteraryAlias=litersryA
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
