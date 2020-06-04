using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{


    public class bookBL
    {
        public static bool addBook(BookDTO bo, double price)
        {
            int codeN;
            using (libraryEntities db = new libraryEntities())
            {
                db.Books.Add(Converters.BookConverter.ConvertBookDTOToDAL(bo)) ;
                try
                {
                    db.SaveChanges();
                    codeN = db.Books.First(b => b.name == bo.name).codeBook;
                    return otekBL.addotek(codeN, Convert.ToInt32(bo.numOtakim), price, Convert.ToInt32(bo.numOtakim));
                }
                catch (Exception e)
                {
                    return false;
                }
                
            }
        }

        public static bool addExistsBook(int code, int amount, double price)
        {
            using (libraryEntities db = new libraryEntities())
            {
                foreach (var item in db.Books)
                {
                    if (item.codeBook == code)
                        item.numOtakim += amount;
                }
                try
                {
                    db.SaveChanges();
                    Book bo = db.Books.First(b => b.codeBook == code);
                    return otekBL.addotek(code, amount, price, Convert.ToInt32(bo.numOtakim));
                }
                catch (Exception e)
                {
                    return false;
                }

                
            }
        }
    }
}
