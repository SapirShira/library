using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class LendingItemConverter
    {
        public static LendingItemDTO ConvertLendingItemToDTO(LendingItem lendingItem)
        {
            using (libraryEntities db = new libraryEntities())
            {
                return new LendingItemDTO
                {

                    codeLending = lendingItem.codeLending,
                    codeOtek = lendingItem.codeOtek,
                    idSUB = Convert.ToInt32(lendingItem.Lending.idSubscribers),
                    comment = lendingItem.comment,
                    returnDate = lendingItem.returnDate,
                    expectedReturnDate=Convert.ToDateTime(lendingItem.Lending.expectReturnDate),
                    bookName = db.Books.First(b => b.codeBook ==lendingItem.Otakim.codeBook).name
                };
            }
        }

        public static LendingItem ConvertLendingItemDTOToDAL(LendingItemDTO lendingItem)
        {
            return new LendingItem
            {
                codeLending = lendingItem.codeLending,
                codeOtek = lendingItem.codeOtek,
                comment = lendingItem.comment,
                returnDate = lendingItem.returnDate
            };
        }

        public static List<LendingItemDTO> ConvertLendingItemListToDTO(List<LendingItem> lendingItem)
        {
            return lendingItem.Select(a => ConvertLendingItemToDTO(a)).ToList();
        }
    }
}
