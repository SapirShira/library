using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class lendingItemsBL
    {
        public static bool addLendingItems(int codeL, int codeO, string com)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.LendingItems.Add(new LendingItem
                {
                    codeLending=codeL,
                    codeOtek=codeO,
                    comment=com,
                    returnDate=null
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
