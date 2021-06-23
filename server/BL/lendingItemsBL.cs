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
                //LendingItem au = db.LendingItems.FirstOrDefault(x => x.codeOtek == l.codeOtek && x.returnDate == null);

            
                //db.LendingItems.Add(Converters.LendingItemConverter.ConvertLendingItemDTOToDAL(l));
                try { 
                    Otakim o = db.Otakims.First(a => a.codeOtek == l.codeOtek);
                    if (o.status == "מושאל" || o.status == "נמחק")
                        return false;
                }
                catch { return false; }
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

        public static newLendingDitaile GetLendingItems()
        {
            using (libraryEntities db = new libraryEntities())
            {
                
                Lending l = db.Lendings.ToList().Last();
                List<LendingItemDTO> s = Converters.LendingItemConverter.ConvertLendingItemListToDTO(db.LendingItems.ToList());
                newLendingDitaile le= new newLendingDitaile();
                le.code = l.codeLending;
                le.lendingItemsToSub=(s.Where(x => x.idSUB == l.idSubscribers && x.returnDate == null).ToList());
                return le;
                
            }
        }

        public static LendingItemDTO GetItemToReturn(int code)
        {
            using (libraryEntities db = new libraryEntities())
            {

                LendingItem au = db.LendingItems.FirstOrDefault(x => x.codeOtek == code && x.returnDate == null);
                if(au==null)
                {
                    return null;
                }
                LendingItemDTO uaDTO = Converters.LendingItemConverter.ConvertLendingItemToDTO(au);
                if (uaDTO.returnDate != null)
                    return uaDTO;
               else
                    return uaDTO;

            }

        }


        public static bool ReturnD(int code)
        {
            using (libraryEntities db = new libraryEntities())
            {
               
                LendingItem au = db.LendingItems.FirstOrDefault(x => x.codeOtek == code && x.returnDate==null);
                au.returnDate = DateTime.Today;

                db.Otakims.First(a => a.codeOtek == au.codeOtek).status = "נמצא";

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
