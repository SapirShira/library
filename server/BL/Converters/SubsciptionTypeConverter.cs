using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class SubsciptionTypeConverter
    {
        public static SubscriptionTypeDTO ConvertSubsciptionTypeToDTO(SubscriptionType subscriptionType)
        {
            return new SubscriptionTypeDTO
            {
                codeType=subscriptionType.codeType,
                numOfBooks = subscriptionType.numOfBooks,
                price = subscriptionType.price,
                status = subscriptionType.status
            };
        }

        public static SubscriptionType ConvertSubsciptionTypeDTOToDAL(SubscriptionTypeDTO subscriptionType)
        {
            return new SubscriptionType
            {
                numOfBooks = subscriptionType.numOfBooks,
                price = subscriptionType.price,
                status = subscriptionType.status
            };
        }

        public static List<SubscriptionTypeDTO> ConvertSubsciptionTypeListToDTO(List<SubscriptionType> subscriptionType)
        {
            return subscriptionType.Select(a => ConvertSubsciptionTypeToDTO(a)).ToList();
        }
    }
}
