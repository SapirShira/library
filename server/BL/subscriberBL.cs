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




        public static bool updateSubsciber(SubsciberDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Subscriber au = db.Subscribers.First(x => x.id == a.id);
                au.firstName = a.firstName;
                au.lastName = a.lastName;
                au.id = a.id;
                au.isDeleted = a.isDeleted;
                au.address = a.address;
                au.phon = a.phon;
                au.startDate = a.startDate;
                au.type = a.type;
                au.email = a.email;


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

        public static bool deleteSubsciber(int a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Subscriber au = db.Subscribers.First(x => x.id == a);
                
                au.isDeleted = true;
               


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


        public static List<SubsciberDTO> GetSubscibers()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.SubsriberConverter.ConvertSubscriberListToDTO(db.Subscribers.Where(a=>a.isDeleted==false).ToList());

            }
        }
    }
}
