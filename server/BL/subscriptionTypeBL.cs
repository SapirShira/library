using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class subscriptionTypeBL
    {
        public static bool addSubscriptionType(int num, double priceN)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.SubscriptionTypes.Add(new SubscriptionType
                {
                    numOfBooks = num,
                    price=Convert.ToInt32(priceN),
                    status=null
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
