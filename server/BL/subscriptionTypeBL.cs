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


        public static bool updateSubscriptionType(SubscriptionTypeDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                SubscriptionType b = db.SubscriptionTypes.First(x => x.codeType == a.codeType);
                b.numOfBooks = a.numOfBooks;
                b.price = a.price;
                b.status = a.status;
                

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


        public static List<SubscriptionTypeDTO> GetSubscriptionTypes()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.SubsciptionTypeConverter.ConvertSubsciptionTypeListToDTO(db.SubscriptionTypes.ToList());
            }
        }

    }
}
