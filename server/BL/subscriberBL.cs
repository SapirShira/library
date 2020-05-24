using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class subscriberBL
    {
        public static bool addSubscriber(int idSub, string firstN, string lastN, string addres, string phonN, int typeN)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Subscribers.Add(new Subscriber
                {
                    id = idSub,
                    firstName = firstN,
                    lastName = lastN,
                    address = addres,
                    phon = phonN,
                    startDate = DateTime.Now,
                    type=typeN,
                    isDeleted=false
                }) ;
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
