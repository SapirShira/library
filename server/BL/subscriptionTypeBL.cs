using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class subscriptionTypeBL
    {
        public static bool addSubscriptionType(SubscriptionTypeDTO s)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.SubscriptionTypes.Add(Converters.SubsciptionTypeConverter.ConvertSubsciptionTypeDTOToDAL(s));
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
