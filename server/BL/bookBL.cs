using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{


    public class bookBL
    {
        public static bool addBook(string namen, int auther, int codeCat, int codeCro, int amount, double price)
        {
            int codeN;
            using (libraryEntities db = new libraryEntities())
            {
                db.Books.Add(new Book
                {
                    name = namen,
                    codAauthor = auther,
                    codeCategory = codeCat,
                    codeCrowd = codeCro,
                    date = DateTime.Now, 
                    isDeleted=false,
                    numOtakim=amount
                }) ;
                try
                {
                    db.SaveChanges();
                    codeN = db.Books.First(b => b.name == namen).codeBook;
                    return otekBL.addotek(codeN, amount, price, amount);
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
