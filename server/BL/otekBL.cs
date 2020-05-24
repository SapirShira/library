using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class otekBL
    {
        public static bool addotek(int codeB, int amount, double priceO, int numOt)
        {
            using (libraryEntities db = new libraryEntities())
            {
                for (int i = numOt-amount+1; i <= numOt; i++)
                {
                    db.Otakims.Add(new Otakim
                    {
                        codeBook = codeB,
                        Serial = i,
                        price = Convert.ToInt32(priceO)
                    }) ;
                }
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
