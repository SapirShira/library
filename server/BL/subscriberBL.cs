using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class subscriberBL
    {
        public static bool addSubscriber(SubsciberDTO s)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Subscribers.Add(Converters.SubsriberConverter.ConvertSubscriberDTOToDAL(s)) ;
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
