using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class SubsriberConverter
    {
        public static SubsciberDTO ConvertSubscriberToDTO(Subscriber subscriber)
        {
            return new SubsciberDTO
            {
                id = subscriber.id,
                firstName = subscriber.firstName,
                lastName = subscriber.lastName,
                address = subscriber.address,
                phon = subscriber.phon,
                startDate = subscriber.startDate,
                type = subscriber.type,
                isDeleted = subscriber.isDeleted,
                email = subscriber.email,
                numOfBooks=Convert.ToInt32(subscriber.SubscriptionType.numOfBooks)
            };
        }

        public static Subscriber ConvertSubscriberDTOToDAL(SubsciberDTO subscriber)
        {
            return new Subscriber
            {
                id = subscriber.id,
                firstName = subscriber.firstName,
                lastName = subscriber.lastName,
                address = subscriber.address,
                phon = subscriber.phon,
                startDate = subscriber.startDate,
                type = subscriber.type,
                isDeleted = subscriber.isDeleted
            };
        }

        public static List<SubsciberDTO> ConvertSubscriberListToDTO(List<Subscriber> subscriber)
        {
            return subscriber.Select(a => ConvertSubscriberToDTO(a)).ToList();
        }
    }
}
