using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class categoriesBL
    {
        public static bool addCategory(CategoryDTO c)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Categories.Add(Converters.categoriesConverter.ConvertCategoryDTOToDAL(c));
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

        public static bool updateCategory(CategoryDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Category b = db.Categories.First(x => x.codeCategory == a.codeCategory);
                b.nameCategory = a.nameCategory;
               
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
