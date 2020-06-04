using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class lendingBL
    {
        public static bool addLending(LendingDTO l)
        {
            int coden;
            using (libraryEntities db = new libraryEntities())
            {
                db.Lendings.Add(Converters.LendingConverter.ConvertLendingDTOToDAL(l)) ;
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
