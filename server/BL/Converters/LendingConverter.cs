using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class LendingConverter
    {
        public static LendingDTO ConvertLendingToDTO(Lending lending)
        {
            return new LendingDTO
            {
                codeLending = lending.codeLending,
                SubscriberFullName = lending.Subscriber.firstName + " " + lending.Subscriber.lastName,
                WorkerFullName = lending.Worker1.name,
                idSubscribers = lending.idSubscribers,
                worker = lending.worker,
                date = lending.date,
                expectReturnDate = Convert.ToDateTime(lending.date).AddDays(30)
            };
        }

        public static Lending ConvertLendingDTOToDAL(LendingDTO lending)
        {
            return new Lending
            {
                idSubscribers = lending.idSubscribers,
                worker = lending.worker,
                date = lending.date,
                expectReturnDate = Convert.ToDateTime(lending.date).AddDays(30),
            };
        }

        public static List<LendingDTO> ConvertLendingListToDTO(List<Lending> lending)
        {
            return lending.Select(a => ConvertLendingToDTO(a)).ToList();
        }
    }
}
