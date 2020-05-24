using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class lendingBL
    {
        public static bool addLending(int idSub, int idWo, int codeO, string com)
        {
            int coden;
            using (libraryEntities db = new libraryEntities())
            {
                db.Lendings.Add(new Lending
                {
                    idSubscribers = idSub,
                    worker = idWo,
                    date = DateTime.Now,
                    expectReturnDate=DateTime.Now.AddDays(30),

                }) ;
                try
                {
                    db.SaveChanges();
                    coden = db.Lendings.Last(b => b.idSubscribers == idSub).codeLending;
                    return lendingItemsBL.addLendingItems(coden, codeO, com);
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }
    }
}
