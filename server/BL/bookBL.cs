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
        public static bool addBook(BookDTO bo)
        {
            int codeN;
            using (libraryEntities db = new libraryEntities())
            {
                Book newB = Converters.BookConverter.ConvertBookDTOToDAL(bo);
                newB.isDeleted = false;
                db.Books.Add(newB) ;
                try
                {
                    db.SaveChanges();
                    codeN = db.Books.First(b => b.name == bo.name).codeBook;
                    OtekToAddDTO ot = new OtekToAddDTO();
                    ot.codeB = codeN;
                    ot.numOt = Convert.ToInt32(bo.numOtakim);
                    return otekBL.addotek(ot, Convert.ToDouble(bo.price) );
                }
                catch (Exception e)
                {
                    return false;
                }
                
            }
        }

       
        public static List<BookDTO> GetBooks()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.BookConverter.ConvertBookListToDTO(db.Books.Where(a=>a.isDeleted==false).ToList());
            }
         }

        public static bool addExistsBook(OtekToAddDTO ot)
        {
            using (libraryEntities db = new libraryEntities())
            {
                foreach (var item in db.Books)
                {
                    if (item.codeBook == ot.codeB)
                        item.numOtakim += ot.numOt;
                }
                try
                {
                    db.SaveChanges();
                    Book bo = db.Books.First(b => b.codeBook == ot.codeB);
                    return otekBL.addotek(ot, 0);
                }
                catch (Exception e)
                {
                    return false;
                }


            }
        }

        public static bool updateBook(BookDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Book b = db.Books.First(x => x.codeBook == a.codeBook);
                b.name = a.name;
                b.numOtakim = a.numOtakim;
                b.codAauthor = a.codeCategory;
                b.codeCategory = a.codeCategory;
                b.codeCrowd = a.codeCrowd;
                b.date = a.date;
                b.isDeleted = a.isDeleted;

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


        public static bool deleteBook(BookDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Book b = db.Books.First(x => x.codeBook == a.codeBook);
                b.isDeleted = true;

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
