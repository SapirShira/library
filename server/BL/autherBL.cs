using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class autherBL
    {
        public static bool addAuther(AuthorDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Aauthors.Add(Converters.AuthorConverter.ConvertAuthorDTOToDAL(a));
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
        public static bool updateAuther(AuthorDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Aauthor au = db.Aauthors.First(x => x.codAauthor == a.codAauthor);

                au.firstName = a.firstName;
                au.lastName = a.lastName;
                au.LiteraryAlias = a.LiteraryAlias;
            

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
