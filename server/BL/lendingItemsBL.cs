using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class lendingItemsBL
    {
        public static bool addLendingItems(LendingItemDTO l)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.LendingItems.Add(Converters.LendingItemConverter.ConvertLendingItemDTOToDAL(l));
                db.Otakims.First(a => a.codeOtek == l.codeOtek).status = "מושאל";
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

        public static List<LendingItemDTO> GetLendingItems()
        {
            using (libraryEntities db = new libraryEntities())
            {
                
                Lending l = db.Lendings.Last();
                List<LendingItemDTO> s = Converters.LendingItemConverter.ConvertLendingItemListToDTO(db.LendingItems.ToList());
                return (s.Where(x=>x.idSUB==l.idSubscribers).ToList());
                
            }
        }


        public static bool ReturnD(int code)
        {
            using (libraryEntities db = new libraryEntities())
            {
               
                LendingItem au = db.LendingItems.First(x => x.codeLending == code && x.returnDate==null);
                au.returnDate = DateTime.Today;
              

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
