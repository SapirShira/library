using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class otekBL
    {
        public static bool addotek(OtekToAddDTO ot, double priceO)
        {
            using (libraryEntities db = new libraryEntities())
            {
                int las;
                Book bo = db.Books.First(b => b.codeBook == ot.codeB);

                List<Otakim> o = db.Otakims.Where(b => b.codeBook == ot.codeB).ToList();
                try
                {
                    Otakim otek = o.Last();
                    las = Convert.ToInt32(otek.Serial);
                }
                catch
                {
                    las = 0;
                }
                for (int i = 0; i < ot.numOt; i++)
                {
                    las++;
                    db.Otakims.Add(new Otakim
                    {
                        codeBook = ot.codeB,

                        Serial = las,
                        price = Convert.ToInt32(priceO),
                        status = "נמצא"
                    });
                }
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

        public static bool updateOtekStatus(int code, string status)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Otakim b = db.Otakims.First(x => x.codeOtek == code);
                b.status = status;
                foreach (var item in db.Books)
                {
                    if (item.codeBook == b.codeBook)
                        item.numOtakim--;
                }

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

        public static List<OtakimDTO> GetOtakim()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.OtekConverter.ConvertOtakimListToDTO(db.Otakims.ToList());
            }
        }

        public static List<OtakimDTO> GetOtakimByCodeBook(int code)
        {
            using (libraryEntities db = new libraryEntities())
            {
                List < OtakimDTO > t= Converters.OtekConverter.ConvertOtakimListToDTO(db.Otakims.Where(x => x.codeBook == code && x.status!="נמחק").ToList());
                return t;
            }
        }


    }
}
